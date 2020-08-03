const express = require('express')
const router = express.Router()

const professional = require('../controllers/professional')

//Routes Holerite User
router.get('/', professional.index)
router.get('/:idServices', professional.professionalServices)
router.post('/', professional.create)
router.put('/:id', professional.update)
router.delete('/:id', professional.delete)

module.exports = router