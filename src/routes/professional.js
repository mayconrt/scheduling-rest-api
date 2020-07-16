const express = require('express')
const router = express.Router()

const professional = require('../controllers/professional')

//Routes Holerite User
router.get('/', professional.index)

module.exports = router