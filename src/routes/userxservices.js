const express = require('express')
const router = express.Router()

const userxservices = require('../controllers/userxservices')

router.get('/:id', userxservices.index)
router.post('/', userxservices.create)
router.delete('/:id', userxservices.delete)

module.exports = router