const express = require('express')
const router = express.Router()

const user = require('../controllers/user')

router.get('/', user.index)
router.post('/', user.create)
router.delete('/:id', user.delete)
router.put('/:id', user.update)

module.exports = router