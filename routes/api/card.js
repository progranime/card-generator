const express = require('express')
const router = express.Router()
const _ = require('lodash')
const fs = require('fs')
const path = require('path')

const mail = require('../../scripts/mail')

// load models
const card = require('../../models/card')
const fileUpload = require('../../scripts/fileUpload')

// @router GET api/card
// @desc   Get all card
// @access Public
router.get('/', async (req, res) => {
    const results = await card.get({
        user: req.query.createBy,
        searchQuery: req.query.searchQuery
    })
    return res.json(results)
})

// @router GET api/card/:id
// @desc   Get specific card
// @access Public
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const results = await card.get({ id })
    return res.json(results[0])
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

        // set the filename
        req.body.picture = `/images/dp/${req.file.filename}`

        const result = await card.store(req.body)

        return res.json(result)
    }
)

// @router PUT api/card/
// @desc   Update card
// @access Public
// --- Please add passport authentication
router.put(
    '/:id',
    fileUpload.single({ name: 'picture' }),
    async (req, res, err) => {
        if (err) console.log(err)

        if (!_.isEmpty(req.file)) {
            // set the filename
            req.body.picture = `/images/dp/${req.file.filename}`

            // use the current id and query to know the current path
            let cardResult = await card.get({ id: req.body.id })
            let imagePath = path.join('client/public', cardResult[0].picture)

            // remove the previous image uploaded because of new image uploaded
            fs.unlink(imagePath, err => {
                if (err) console.log(err)
                console.log('File Deleted!')
            })
        }

        const result = await card.update(req.body)
        return res.json(result)
    }
)

// @router Delete api/card/:id
// @desc   Delete the card using its id
// @access Delete
router.delete('/', async (req, res) => {
    const result = await card.destroy(req.body)
    return res.json(result)
})

// @router POST api/card/requestApproval
// @desc   Requesting for approval to the admin
// @access Public
router.post('/requestApproval', async (req, res) => {
    const result = await mail.send({
        id: req.body.id,
        requestor: req.body.createBy
    })

    return res.json(result)
})

// @router PUT api/card/:id/update/status
// @desc   Update the card status column
// @access Public
router.put('/:id/update/status', async (req, res) => {
    const result = await card.updateStatus(req.body)
    return res.json(result)
})

module.exports = router
