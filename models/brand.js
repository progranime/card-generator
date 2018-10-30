const db = require('../db')

module.exports = {
    get: function(id = null) {
        let GET
        if (id) {
            GET = `SELECT * FROM brand WHERE id = ${id}`
        } else {
            GET = `SELECT * FROM brand ORDER BY sequence`
        }

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    }
}
