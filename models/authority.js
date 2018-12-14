const db = require('../db')
const _ = require('lodash')

const self = {
    get: (id = null) => {
        let SELECT, GET

        SELECT = `SELECT a.id, a.email, a.authority_role_id, a.is_delete, ar.name AS authority_role
            FROM authority a
            LEFT JOIN authority_role ar
            ON a.authority_role_id = ar.id`

        if (id) {
            GET = `${SELECT} WHERE a.id = ? AND a.is_delete = 0;`
        } else {
            GET = `${SELECT}
                WHERE a.is_delete = 0`
        }

        return new Promise(resolve => {
            db.query(GET, [id], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    getByAuthorityRole: id => {
        let GET = `SELECT * FROM authority
            WHERE authority_role_id = ? AND is_delete = 0`

        return new Promise(resolve => {
            db.query(GET, [id], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    store: async req => {
        let INSERT = `INSERT INTO authority SET ?`
        let formData = {
            email: req.email,
            authority_role_id: req.role
        }

        // must check first if the email is existing
        let validation = await self.hasEmail(formData.email)
        if (Object.keys(validation).length !== 0) return validation

        return new Promise(resolve => {
            db.query(INSERT, [formData], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    update: async req => {
        let UPDATE = `UPDATE authority SET ? WHERE id = ?`
        let formData = {
            email: req.email,
            authority_role_id: req.role
        }

        return new Promise(resolve => {
            db.query(UPDATE, [formData, req.id], (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    },
    destroy: ({ id = null }) => {
        const data = {
            is_delete: 1
        }

        let UPDATE = `UPDATE authority SET ? WHERE id = ?`

        return new Promise(resolve => {
            db.query(UPDATE, [data, id], (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    },
    getByEmail: (email = null) => {
        let GET = `SELECT a.id, a.email, a.authority_role_id, a.is_delete, ar.name AS authority_role
            FROM authority a
            LEFT JOIN authority_role ar
            ON a.authority_role_id = ar.id
            WHERE a.email = '${email}' AND a.is_delete = 0`

        return new Promise(resolve => {
            db.query(GET, (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    },
    hasEmail: async email => {
        let errors = {}
        let hasEmail = await self.getByEmail(email)

        if (!_.isEmpty(hasEmail)) {
            errors.email = 'Email Already Exists!'
            return { errors }
        }
        return {}
    }
}

module.exports = self
