const db = require('../db')

const self = {
    get: id => {
        let GET

        if (id) {
            GET = `SELECT * FROM notification
                WHERE id = ?`
        } else {
            GET = `SELECT * FROM notification`
        }

        return new Promise(resolve => {
            db.query(GET, [id], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    getUserNotification: email => {
        let GET = `SELECT n.id, n.recipient_email, n.sender_email, n.link, n.is_read, n.create_date,
            nt.id AS notification_type_id, nt.name AS notification_type_name,
            nt.template AS template
            FROM notification n
            LEFT JOIN notification_type nt
            ON n.notification_type_id = nt.id
            WHERE n.recipient_email = '${email}'
            ORDER BY n.create_date DESC`

        return new Promise(resolve => {
            db.query(GET, [email], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    store: req => {
        const notificationData = {
            sender_email: req.senderEmail,
            recipient_email: req.recipientEmail,
            link: req.link,
            notification_type_id: req.notificationTypeId
        }

        let INSERT = `INSERT INTO notification SET ?`

        return new Promise(resolve => {
            db.query(INSERT, notificationData, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    update: req => {
        const notificationData = {
            is_read: req.isRead
        }

        let UPDATE = `UPDATE notification SET ? WHERE id = ?`

        return new Promise(resolve => {
            db.query(UPDATE, [notificationData, req.id], (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    destroy: () => {}
}

module.exports = self
