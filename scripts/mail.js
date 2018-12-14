const nodemailer = require('nodemailer')

const { account } = require('../config/keys')

module.exports = {
    send: payload => {
        return new Promise(resolve => {
            let html = `
            <p>Hi,<p>
            <p>A request by ${
                payload.requestor
            } for Business Card Generator has been submitted that requires
            your approval.</p>
            <p>To process the approval click on this <a href="http://localhost:3001/admin/dashboard/${
                payload.id
            }/edit" target="_blank">http://localhost:3001/admin/dashboard/${
                payload.id
            }/edit</a>.</p>
            <p>Thank You!</p>`

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.password // generated ethereal password
                }
            })

            // setup email data with unicode symbols
            let mailOptions = {
                from: `Business Card Generator <${account.user}>`, // sender address
                to: `${account.receivers}`, // list of receivers
                subject: 'Business Card Generator Request', // Subject line
                html: html // html body
            }

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) return console.log(error)

                console.log('Message sent: %s', info.messageId)
                console.log(
                    'Preview URL: %s',
                    nodemailer.getTestMessageUrl(info)
                )

                resolve({
                    message: 'Email has been sent!'
                })
            })
        })
    }
}
