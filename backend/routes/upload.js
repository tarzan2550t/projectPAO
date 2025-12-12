const router = require('express').Router()
const evaluateecontroller  = require('../controlles/evaluatee')
const upload = require('../middleware/upload')
const auth = require('../middleware/auth')


router.post('/upload' , auth('evaluatee') , upload.single('photo') , evaluateecontroller.test)



module.exports = router



