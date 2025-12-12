module.exports = (error , req, res,next)=>{
    const status = error.status || 500
    const message = error.message || "inserver Error"
    res.status(status).json({message})

}