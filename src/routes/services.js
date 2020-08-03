const express = require('express')
const router = express.Router()
const services = require('../controllers/services')
const authMiddleware = require('../middlewares/auth')

//Routes Holerite User
//router.use(authMiddleware)
router.get('/', services.index)
router.get('/:idPlaces', services.servicesPlaces)
router.post('/', services.create)
router.delete('/:id', services.delete)
router.put('/:id', services.update)

module.exports = router