const router = require('express').Router()
const controller_auth = require('../controlles/auth')

// router.get('/test' , controller_auth.test) test

//path http://localhost:7000/api/auth/ ชื่อที่ต้องการใช้
router.post('/register' , controller_auth.register)
router.post('/login' , controller_auth.login)


//เเสดงข้อมูลช่องให้เลือก list หน้าregister 
router.get('/departments' , controller_auth.department)
router.get('/groups' , controller_auth.group)




module.exports = router



