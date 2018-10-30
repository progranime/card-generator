const express = require('express')
const router = express.Router()

const brand = require('../../models/brand')

// @router GET api/brand
// @desc   Get all brand
// @access Public
router.get('/', async (req, res) => {
    const results = await brand.get()
    res.json(results)
})

// @router GET api/brand/:ID
// @desc   Get specific brand
// @access Public
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await brand.get(id)
    res.json(result)
})

module.exports = router
