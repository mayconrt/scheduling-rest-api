const express = require('express')
const router = express.Router()

const schedule = require('../controllers/schedule')

router.get('/:id', schedule.index)
router.post('/', schedule.create)
router.delete('/:id', schedule.delete)

module.exports = router