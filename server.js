const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// load routes
const card = require('./routes/api/card')
const productDivision = require('./routes/api/productDivision')
const brand = require('./routes/api/brand')
const status = require('./routes/api/status')
const authority = require('./routes/api/authority')
const authorityRole = require('./routes/api/authorityRole')
const location = require('./routes/api/location')
const notification = require('./routes/api/notification')

// express middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create routes
app.use('/api/card', card)
app.use('/api/productDivision', productDivision)
app.use('/api/brand', brand)
app.use('/api/status', status)
app.use('/api/authority', authority)
app.use('/api/authorityRole', authorityRole)
app.use('/api/location', location)
app.use('/api/notification', notification)

// server port
const port = 5001

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
