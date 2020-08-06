const express = require('express')
const router = express.Router()

const freeHours = require('../controllers/freeHours')

//Routes Holerite User
router.get('/', freeHours.index)

module.exports = router