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
router.post(
    '/',
    fileUpload.single({ name: 'picture' }),
    async (req, res, err) => {
        if (err) console.log(err)

        const validation = cardForm.validation(req.body)

        if (!_.isEmpty(validation.errors)) return res.json(validation)

        // set the filename
        req.body.picture = `/images/dp/${req.file.filename}`

        const result = await card.store(req.body)
        return res.json(result)
    }
)

// @router PUT api/card/:id
// @desc   Update the card
// @access PUT
router.put('/:id', fileUpload.single({ name: 'picture' }), async (req, res) => {
    console.log('update router')

    // MUST DELETE THE PREVIOUS IMAGE !!!

    // set the filename
    req.body.picture = `/images/dp/${req.file.filename}`

    const result = await card.update(req.body)
    return res.json(result)
})

// @router PUT api/card/:id/destroy
// @desc   Delete the card using its id
// @access PUT
router.put('/:id/destroy', async (req, res) => {
    const id = req.params.id
    const result = await card.destroy(id)
    return res.json(result)
})

module.exports = router
