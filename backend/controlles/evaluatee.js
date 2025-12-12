const conn = require('../config/db')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')


exports.test = async(req,res , next)=>{
    try{

    }catch(e){
        next(e)
    }
}