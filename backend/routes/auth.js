const router = require('express').Router()
const controller_auth = require('../controlles/auth')

// router.get('/test' , controller_auth.test) test

//path http://localhost:7000/api/auth/ ชื่อที่ต้องการใช้
router.post('/register' , controller_auth.register)
router.post('/login' , controller_auth.login)




module.exports = router



