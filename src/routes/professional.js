const express = require('express')
const router = express.Router()

const professional = require('../controllers/professional')

//Routes Holerite User
router.get('/', professional.index)
router.post('/', professional.create)
router.put('/:id', professional.update)
router.delete('/:id', professional.delete)

module.exports = router