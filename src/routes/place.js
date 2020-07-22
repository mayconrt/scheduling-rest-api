const express = require('express')
const router = express.Router()
const places = require('../controllers/places')
const authMiddleware = require('../middlewares/auth')

//Routes Holerite User
//router.use(authMiddleware)
router.get('/', places.index)
router.post('/', places.create)
router.delete('/:id', places.delete)
router.put('/:id', places.update)

module.exports = router