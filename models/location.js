const db = require('../db')

const self = {
    get: id => {
        let GET

        if (id) {
            GET = `SELECT * FROM location
                WHERE id = ?`
        } else {
            GET = `SELECT * FROM location`
        }

        return new Promise(resolve => {
            db.query(GET, [id], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    store: () => {},
    update: () => {},
    destroy: () => {}
}

module.exports = self
