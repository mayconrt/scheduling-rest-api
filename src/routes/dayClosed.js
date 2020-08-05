const express = require('express')
const router = express.Router()

const dayClosed = require('../controllers/dayClosed')

router.get('/', dayClosed.index)
router.post('/', dayClosed.create)
router.put('/:id', dayClosed.update)
router.delete('/:id', dayClosed.delete)

module.exports = router