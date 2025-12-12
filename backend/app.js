const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.static('upload'))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Router
 const auth = require('./routes/auth')
 const upload = require('./routes/upload')
 const admin = require('./routes/admin')

app.use('/api/auth' , auth)
app.use('/api/upload' , upload)
app.use('/api/admin' , admin)

app.use((req,res)=>{
    res.status(404).json({Message:'Not found 404'})
})

module.exports = app