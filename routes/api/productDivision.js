const express = require('express')
const router = express.Router()

// load models
const productDivision = require('../../models/productDivision')

// @router GET api/productDivision
// @desc   Get all product division
// @access Public
router.get('/', async (req, res) => {
    const results = await productDivision.get()
    res.json(results)
})

// @router GET api/productDivision/:id
// @desc   Get specific product division
// @access Public
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await productDivision.get(id)
    res.json(result)
})

// @router GET api/productDivision/getBrandList
// @desc   Get brand list depends on the product division
// @access Public
router.get('/getBrandList/:id', async (req, res) => {
    const id = req.params.id
    const results = await productDivision.getBrandList(id)
    res.json(results)
})

module.exports = router
