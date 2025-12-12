const conn = require('../config/db')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')


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
