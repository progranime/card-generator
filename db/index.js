const mysql = require('mysql')
const config = require('../config/keys')

// create DB connection
const db = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db,
    multipleStatements: true
})

// initialize connection
db.connect(err => {
    // throw an error if have
    if (err) console.log(err)

    console.log('Connected to MySql ...')
})

module.exports = db
