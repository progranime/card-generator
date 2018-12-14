const express = require('express')
const router = express.Router()

const authority = require('../../models/authority')

// @router GET api/authority/authorityRole/:id
// @desc   Get specific authority by its authority role like admin, printer
// @access Public
router.get('/authorityRole/:id', async (req, res) => {
    const results = await authority.getByAuthorityRole(req.params.id)
    return res.json(results)
})

// @router GET api/authority/getByEmail/:name
// @desc   Get specific authority by name
// @access Public
router.get('/:name/getByEmail', async (req, res) => {
    const results = await authority.getByEmail(req.params.name)
    return res.json(results)
})

// @router GET api/authority/:id
// @desc   Get specific authority
// @access Public
router.get('/:id', async (req, res) => {
    const results = await authority.get(req.params.id)
    return res.json(results[0])
})

// @router GET api/authority
// @desc   Get all authority
// @access Public
router.get('/', async (req, res) => {
    const results = await authority.get()
    return res.json(results)
})

// @router POST api/authority
// @desc   Post authority
// @access Public
router.post('/', async (req, res) => {
    const results = await authority.store(req.body)
    return res.json(results)
})

// @router GET api/authority
// @desc   Get all authority
// @access Public
router.put('/', async (req, res) => {
    const results = await authority.update(req.body)
    return res.json(results)
})

// @router DELETE api/authority
// @desc   Delete specific authority
// @access Public
router.delete('/', async (req, res) => {
    const result = await authority.destroy(req.body)
    return res.json(result)
})

module.exports = router
