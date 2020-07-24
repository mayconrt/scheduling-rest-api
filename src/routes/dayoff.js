const express = require('express')
const router = express.Router()

const dayOff = require('../controllers/dayOff')

//Routes Holerite User
router.get('/', dayOff.index)
router.post('/', dayOff.create)
router.put('/:id', dayOff.update)
router.delete('/:id', dayOff.delete)

module.exports = router