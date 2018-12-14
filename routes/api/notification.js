const express = require('express')
const router = express.Router()

const notification = require('../../models/notification')

// @router GET api/notification/:email
// @desc   Get specific notification by email
// @access Public
router.get('/email/:email', async (req, res) => {
    const results = await notification.getUserNotification(req.params.email)
    return res.json(results)
})

// @router GET api/notification/:id
// @desc   Get specific notification by id
// @access Public
router.get('/:id', async (req, res) => {
    const results = await notification.get(req.params.id)
    return res.json(results)
})

// @router GET api/notification
// @desc   Get all notification
// @access Public
router.get('/', async (req, res) => {
    const results = await notification.get()
    return res.json(results)
})

// @router POST api/notification
// @desc   Create notification
// @access Public
router.post('/', async (req, res) => {
    const results = await notification.store(req.body)
    return res.json(results)
})

// @router POST api/notification
// @desc   Create notification
// @access Public
router.put('/', async (req, res) => {
    const results = await notification.update(req.body)
    return res.json(results)
})

module.exports = router
