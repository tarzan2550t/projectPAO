const jwt  = require('jsonwebtoken')
require('dotenv').config()

module.exports = (...role)=>{
    return (req,res,next)=>{
        try{    
            const headers = req.headers.authorization || ''
            const token  = headers.toLowerCase().startsWith('bearer ') ? headers.slice(7) : null
            if(!token){const e = new Error('ไม่มี token'); e.status = 401; return next(e)}

            const payload = jwt.verify(token , process.env.JWT_SECRETFILE ) //แปลงข้อมูล

            if(role.length && !role.includes(payload.role)){
                const e = new Error('คุณไม่มีสิทธ์เข้า'); e.status = 403; return next(e)
            }
            req.user = payload
            next()
        }catch(e){
            next(e)
        }
    }
}