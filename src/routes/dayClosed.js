const express = require('express')
const router = express.Router()

const userxservices = require('../controllers/dayClosed')

router.get('/', businessHours.index)
router.post('/', businessHours.create)
router.put('/:id', businessHours.update)
router.delete('/:id', businessHours.delete)

module.exports = router