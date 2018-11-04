const express = require('express')
const router = express.Router()
const _ = require('lodash')
const fileUpload = require('../../scripts/fileUpload')

// load models
const card = require('../../models/card')

// load validation
const cardForm = require('../../scripts/validation/cardForm')

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

// @router POST api/card/
// @desc   Create new card
// @access Public
// --- Please add passport authentication
router.post('/', (req, res) => {
    const request = req.body
    // const validation = cardForm.validation(request)

    // if (!_.isEmpty(validation.errors)) return res.json(validation.errors)

    fileUpload.single({ name: 'picture' })(req, res, async err => {
        console.log('Request ---', req.body)
        console.log('Request file ---', req.file) //Here you get file.
        // set the filename
        req.body.picture = `/images/dp/${req.file.filename}`

        const result = await card.store(req.body)
        return res.json(result)
    })
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
