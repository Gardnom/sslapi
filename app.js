const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 5000



const logger = (req,res,next)=>{
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    console.log(`Incoming request from ip: ${ip}`)
    next()
}
app.use(logger)
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.end('Welcome to index page!')

})
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})

