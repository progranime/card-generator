const db = require('../db')

module.exports = {
    get: function(id = null) {
        let GET
        if (id) {
            GET = `SELECT * FROM product_division WHERE id = ${id}
                AND is_delete = 0`
        } else {
            GET = `SELECT * FROM product_division
                WHERE is_delete = 0`
        }

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },

    getBrandList: function(id) {
        let GET_BRAND_LIST = `SELECT pd.id, pd.name, pd.brand_list_id,
            GROUP_CONCAT(bl.name SEPARATOR ',') AS brand_list_name
            FROM product_division pd
            LEFT JOIN brand_list bl
            ON pd.brand_list_id = bl.brand_list_id
            WHERE bl.brand_list_id = ${id} AND bl.is_delete = 0`

        return new Promise(resolve => {
            db.query(GET_BRAND_LIST, (err, results) => {
                if (err) console.log(err)
                resolve(results[0])
            })
        })
    }
}
