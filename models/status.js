const db = require('../db')

module.exports = {
    get: function(id = null) {
        let GET
        if (id) {
            GET = `SELECT * FROM status
                WHERE id = '${id}' AND is_delete = 0;`
        } else {
            GET = `SELECT * FROM status
                WHERE is_delete = 0`
        }

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    }
}
