const conn = require('../config/db')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')

//<----เเสดงข้อมูลเป็น List ---->
exports.userlsit = async (req,res,next)=>{
    try{
        const items = await conn('users').select()
        res.json(items)
    }catch(e){
        next(e)
    }
}
exports.periods = async (req,res,next)=>{
    try{
        const items = await conn('evluation_periods').select()
        res.json(items)
    }catch(e){
        next(e)
    }
}
exports.topics = async (req,res,next)=>{
    try{
        const items = await conn('evaluation_topics').select()
        res.json(items)
    }catch(e){
        next(e)
    }
}
exports.indecators = async (req,res,next)=>{
    try{
        const items = await conn('indicators').select()
        res.json(items)
    }catch(e){
        next(e)
    }
}
exports.assignment = async (req,res,next)=>{
    try{
        const items = await conn('assigmments').select()
        res.json(items)
    }catch(e){
        next(e)
    }
}
//<---- end ------>


//สร้างบัญชีผู้ใช้งาน
exports.createuser = async (req,res,next)=>{
    try{
        const {email , password , name , department_id , group_id , role} = req.body
        const examine = await conn('users').select({email}).first()
        if(examine){const e = new Error('มีบัญชีผู้ใช้เเล้ว'); e.status = 401; return next(e)}

         const password_hash = await bcrypt.hash(password , 10)

          const increase = await conn('users').insert({name , email , password : password_hash , department_id , group_id , role})
        res.json({success:true  , message:'complata'})
    }catch(e){
        next(e)
    }
}
//สร้างหัวข้อ
exports.createperiod = async (req,res,next)=>{
    try{
        const {name , year , start_date , end_date } = req.body
        const examine = await conn('evluation_periods').select({name}).first()
        if(examine){const e = new Error('มีหัวข้อนี้เเล้ว'); e.status = 401; return next(e)}

          const increase = await conn('evluation_periods').insert({name , year , start_date  , end_date  })
        res.json({success:true  , message:'complata'})
    }catch(e){
        next(e)
    }
}
//สร้างหัวข้อย่อย
exports.createtopic = async (req,res,next)=>{
    try{
        const {	period_id  , name , description	 , 	weight } = req.body
        const examine = await conn('evaluation_topics').select({name}).first()
        if(examine){const e = new Error('มีบัญชีผู้ใช้เเล้ว'); e.status = 401; return next(e)}

          const increase = await conn('evaluation_topics').insert({name , period_id , description , weight })
        res.json({success:true  , message:'complata'})
    }catch(e){
        next(e)
    }
}
exports.createindicator = async (req,res,next)=>{
    try{
        const {	topic_id  , name , description	 , 	type , weight } = req.body
        const examine = await conn('indicators').select({name}).first()
        if(examine){const e = new Error('มีหัวข้อนี้เเล้ว'); e.status = 401; return next(e)}

          const increase = await conn('indicators').insert({name , topic_id , description , type ,weight  })
        res.json({success:true  , message:'complata'})
    }catch(e){
        next(e)
    }
}
exports.createindicator = async (req,res,next)=>{
    try{
        const {	period_id  ,evaluator_id , evaluatee_id, department  } = req.body
        const examine = await conn('assigmments').select({evaluatee_id , evaluator_id}).first()
        if(examine){const e = new Error('กำหนดผูประเมินนี้เเล้ว'); e.status = 401; return next(e)}

          const increase = await conn('assigmments').insert({period_id , evaluator_id , evaluatee_id , department   })
        res.json({success:true  , message:'complata'})
    }catch(e){
        next(e)
    }
}