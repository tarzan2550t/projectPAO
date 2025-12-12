// const multer = require('multer')
// const path = require('path')
// const fs = require('fs')

// const MAX_MB = Number(process.env.UPLOAD_MB_MB)

// const ALLOWED = new Set([
//     'image/jpeg',
//     'image/png',
//     'application/pdf'
// ])

// function ensureDir(dir){
//     if(!fs.existsSync(dir)) fs.mkdirSync(dir , {recursive : true})
        
// }


// const storage = multer.diskStorage({
//     destination: , 
//     filename ,

// })

// function filefilter(req,file,cb){
//     if(!ALLOWED,has(file.mimetype)){
//         return cb(new Error('ประเภทไฟล์ไม่ถูกต้อง') , false);
//     }
//     cb(null,true)
// }

// const upload = multer({})
// module.exports = upload