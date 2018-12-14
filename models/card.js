const db = require('../db')
const authority = require('./authority')

module.exports = {
    get: async function({ id = null, user = null, searchQuery = '' }) {
        let GET, SELECT

        SELECT = `SELECT c.id, c.name, c.picture, c.position, c.location_id, l.name AS location_name, c.product_division_id,
            c.create_by, c.is_delete, co.cellphone, co.telephone, co.email, co.skype,
            GROUP_CONCAT(bl.name SEPARATOR ',') AS brand_list,
            s.name AS status_name, s.id AS status_id, s.sequence AS status_sequence
            FROM card c
            LEFT JOIN contact co
            ON c.id = co.card_id
            LEFT JOIN product_division pd
            ON c.product_division_id = pd.id
            LEFT JOIN brand_list bl
            ON pd.brand_list_id = bl.brand_list_id
            LEFT JOIN STATUS s
            ON c.status_id = s.id
            LEFT JOIN location l
            ON c.location_id = l.id`

        if (id) {
            GET = `${SELECT}
                WHERE c.id = ${id} AND c.is_delete = 0
                GROUP BY bl.brand_list_id, c.id`
        } else {
            // check the user role
            let authorityGetter = await authority.getByEmail(user),
                authorityRole = authorityGetter[0]
                    ? authorityGetter[0].authority_role
                    : '',
                userRule = '',
                searchQueryRule = '',
                notDeletedRule = ''

            // if normal user show only its card/data
            // if admin show all crated card by all users
            if (authorityRole === 'admin' || authorityRole === 'printer') {
                searchQueryRule = `HAVING (c.name LIKE '%${searchQuery}%' OR c.position LIKE '%${searchQuery}%')`
            } else {
                userRule = `HAVING c.create_by = '${user}'`
                searchQueryRule = `AND (c.name LIKE '%${searchQuery}%' OR c.position LIKE '%${searchQuery}%')`
            }

            notDeletedRule = `AND c.is_delete = 0`
            orderBySequence = `ORDER BY s.sequence`

            GET = `${SELECT}
                GROUP BY bl.brand_list_id, c.id
                ${userRule} ${searchQueryRule}
                ${notDeletedRule}
                ${orderBySequence}`
        }

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)

                resolve(results)
            })
        })
    },
    store: function(req) {
        let date = new Date()
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const cardData = {
            name: req.name,
            picture: req.picture,
            position: req.position,
            location_id: req.locationId,
            product_division_id: req.productDivision,
            create_by: req.createBy,
            create_date: date
        }

        const contactData = {
            cellphone: req.cellphone,
            telephone: req.telephone,
            email: req.email,
            skype: req.skype
        }

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
    update: function(req) {
        let date = new Date()
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const cardData = {
            name: req.name,
            picture: req.picture,
            position: req.position,
            location_id: req.locationId,
            product_division_id: req.productDivision,
            update_by: req.updateBy,
            update_date: date
        }

        const contactData = {
            cellphone: req.cellphone,
            telephone: req.telephone,
            email: req.email,
            skype: req.skype
        }

        let UPDATE_CARD = `UPDATE card SET ? WHERE id = ?`
        let UPDATE_CONTACT = `UPDATE contact SET ? WHERE card_id = ?`

        return new Promise(resolve => {
            db.query(UPDATE_CARD, [cardData, req.id], (err, result) => {
                if (err) console.log(err)

                db.query(
                    UPDATE_CONTACT,
                    [contactData, req.id],
                    (err, result) => {
                        if (err) console.log(err)
                        resolve(result)
                    }
                )
            })
        })
    },
    destroy: function({ id = null, deleteBy = null }) {
        const data = {
            is_delete: 1,
            update_by: deleteBy
        }

        let UPDATE = `UPDATE card SET ? WHERE id = ?`

        return new Promise(resolve => {
            db.query(UPDATE, [data, id], (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    },
    updateStatus: function(req) {
        let date = new Date()
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        let cardData = {
            status_id: req.statusId,
            update_by: req.updateBy,
            update_date: date
        }

        let UPDATE_CARD_STATUS = `UPDATE card SET ? WHERE id = ?`

        return new Promise(resolve => {
            db.query(UPDATE_CARD_STATUS, [cardData, req.id], (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    }
}
