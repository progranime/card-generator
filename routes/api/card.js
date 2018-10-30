const express = require('express')
const router = express.Router()

// load models
const card = require('../../models/card')

// @router GET api/card
// @desc   Get all card
// @access Public
router.get('/', async (req, res) => {
    const results = await card.get()
    res.json(results)
})

// @router GET api/card/:id
// @desc   Get specific card
// @access Public
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const results = await card.get(id)
    res.json(results)
})

// @router POST api/card/store
// @desc   Create new card
// @access Public
// --- Please add passport authentication
router.post('/store', async (req, res) => {
    const request = req.body
    const result = await card.store(request)
    res.json(result)
})

// @router PUT api/card/:id/destroy
// @desc   Delete the card using its id
// @access PUT
router.put('/:id/destroy', async (req, res) => {
    const id = req.params.id
    const result = await card.destroy(id)
    res.json(result)
})

module.exports = router
