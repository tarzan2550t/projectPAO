const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Router
 const auth = require('./routes/auth')

app.use('/api/auth' , auth)

app.use((req,res)=>{
    res.status(404).json({Message:'Not found 404'})
})

module.exports = app