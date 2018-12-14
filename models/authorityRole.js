const db = require('../db')

module.exports = {
    get: (id = null) => {
        let GET,
            SELECT = 'SELECT * FROM authority_role'

        if (id) {
            GET = `${SELECT}
                WHERE id = ?;`
        } else {
            GET = SELECT
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
