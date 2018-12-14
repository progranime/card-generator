const express = require('express')
const router = express.Router()

const status = require('../../models/status')

// @router GET api/status
// @desc   Get all status
// @access Public
router.get('/', async (req, res) => {
    const results = await status.get()
    return res.json(results)
})

module.exports = router
