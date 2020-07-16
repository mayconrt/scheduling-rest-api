const express = require('express')
const router = express.Router()

const services = require('../controllers/services')

//Routes Holerite User
router.get('/', services.index)
router.post('/', services.create)

module.exports = router