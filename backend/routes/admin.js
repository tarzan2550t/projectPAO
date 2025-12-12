const router = require('express').Router()
const controller_admin = require('../controlles/admin')
//http://localhost:7000/api/admin/ชื่อ
//เรีกยกข้อมูลมาเเสดง
router.get('/userlist' , controller_admin.userlsit)
router.get('/periodlist' , controller_admin.periods)
router.get('/topiclist' , controller_admin.topics)
router.get('/indicatorlist' , controller_admin.indecators)
router.get('/assignment' , controller_admin.assignment)


module.exports = router