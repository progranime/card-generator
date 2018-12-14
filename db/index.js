const mysql = require('mysql')
const config = require('../config/keys')

// create DB connection
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db,
    multipleStatements: true
}
let db = mysql.createConnection(dbConfig)
let timeoutConnection

// initialize connection
db.connect(err => {
    if (err) {
        console.log(err)
        return err
    }

    console.log('Connected to MySql ...')
})

db.on('error', err => {
    // if server disconnect, handle the connection
    handleConnectionError(err)
})

function handleConnectionError(err) {
    console.log('Handle connection error: ', err)
    try {
        if (
            err.code === 'ECONNRESET' ||
            err.code === 'ECONNREFUSED' ||
            err.code === 'PROTOCOL_CONNECTION_LOST'
        ) {
            timeoutConnection = setInterval(() => {
                reconnect()
            }, 1000)
        }
    } catch (e) {}
}

function reconnect() {
    console.log('reconnecting to the database')
    db = mysql.createConnection(dbConfig)
    clearInterval(timeoutConnection)
}

module.exports = db
