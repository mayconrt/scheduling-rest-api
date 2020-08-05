const express = require('express')
const router = express.Router()

const scale = require('../controllers/scale')

router.get('/', scale.index)
router.post('/', scale.create)
router.put('/:id', scale.update)
router.delete('/:id', scale.delete)

module.exports = router