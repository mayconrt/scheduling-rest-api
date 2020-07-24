const express = require('express')
const router = express.Router()

const businessHours = require('../controllers/businessHours')

//Routes Holerite User
router.get('/', businessHours.index)
router.post('/', businessHours.create)
router.put('/:id', businessHours.update)
router.delete('/:id', businessHours.delete)

module.exports = router