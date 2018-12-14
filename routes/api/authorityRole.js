const express = require('express')
const router = express.Router()

const authorityRole = require('../../models/authorityRole')

// @router GET api/authorityRole/:id
// @desc   Get specific authority role
// @access Public
router.get('/:id', async (req, res) => {
    const results = await authorityRole.get(req.params.id)
    return res.json(results)
})

// @router GET api/authorityRole
// @desc   Get all authority role
// @access Public
router.get('/', async (req, res) => {
    const results = await authorityRole.get()
    return res.json(results)
})

module.exports = router
