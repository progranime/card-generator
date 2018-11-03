const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// load routes
const card = require('./routes/api/card')
const productDivision = require('./routes/api/productDivision')
const brand = require('./routes/api/brand')

// express middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// create routes
app.use('/api/card', card)
app.use('/api/productDivision', productDivision)
app.use('/api/brand', brand)

// server port
const port = 5001

// start listening to port
app.listen(port, () => console.log(`Server running on port ${port}`))
