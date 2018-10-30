const db = require('../db')

module.exports = {
    get: function(id = null) {
        let GET
        if (id) {
            GET = `SELECT c.id, c.name, c.picture, c.position, c.location, c.product_division_id,
                co.cellphone, co.telephone, co.email, co.skype, c.is_delete,
                GROUP_CONCAT(bl.name SEPARATOR ',') AS brand_list
                FROM card c
                LEFT JOIN contact co
                ON c.id = co.card_id
                LEFT JOIN product_division pd
                ON c.product_division_id = pd.id
                LEFT JOIN brand_list bl
                ON pd.brand_list_id = bl.brand_list_id
                WHERE c.id = ${id}
                GROUP BY bl.brand_list_id, c.id`
        } else {
            GET = `SELECT c.id, c.name, c.picture, c.position, c.location, c.product_division_id,
                co.cellphone, co.telephone, co.email, co.skype, c.is_delete,
                GROUP_CONCAT(bl.name SEPARATOR ',') AS brand_list
                FROM card c
                LEFT JOIN contact co
                ON c.id = co.card_id
                LEFT JOIN product_division pd
                ON c.product_division_id = pd.id
                LEFT JOIN brand_list bl
                ON pd.brand_list_id = bl.brand_list_id
                GROUP BY bl.brand_list_id, c.id;`
        }

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)

                resolve(results)
            })
        })
    },
    store: function(req) {
        const cardData = {
            name: req.name,
            picture: req.picture,
            position: req.position,
            location: req.location,
            product_division_id: req.productDivision,
            create_by: req.username
        }

        const contactData = {
            cellphone: req.cellphone,
            telephone: req.telephone,
            email: req.email,
            skype: req.skype
        }

        // console.log(cardData)
        // console.log(contactData)

        // insert data
        let INSERT_CARD = `INSERT INTO card SET ? `
        let INSERT_CONTACT = `INSERT INTO contact SET ?`

        return new Promise(resolve => {
            db.query(INSERT_CARD, cardData, (err, result) => {
                if (err) console.log(err)
                // get the id of the inserted card
                let id = result.insertId

                // add the card id to contactData object
                contactData.card_id = id
                // query to insert contact data
                db.query(INSERT_CONTACT, contactData, (err, result) => {
                    if (err) console.log(err)
                    resolve(result)
                })
            })
        })
    },
    update: function() {},
    destroy: function(id) {
        let UPDATE = `UPDATE card SET is_delete = 1 WHERE id = ?`

        return new Promise(resolve => {
            db.query(UPDATE, [id], (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    }
}
