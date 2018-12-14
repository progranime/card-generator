const express = require('express')
const router = express.Router()

const location = require('../../models/location')

// @router GET api/location/:id
// @desc   Get specific location
// @access Public
router.get('/:id', async (req, res) => {
    const results = await location.get(req.params.id)
    return res.json(results)
})

// @router GET api/location
// @desc   Get all location
// @access Public
router.get('/', async (req, res) => {
    const results = await location.get()
    return res.json(results)
})

module.exports = router
