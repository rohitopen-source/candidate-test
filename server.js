const express = require('express')
const srv = express()

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
const rt = require('./routes/index')


srv.use('/add',rt.route)
srv.get('/',function(req,res,next){
    res.send("Server is running")
})



srv.listen('5555',()=>{
    console.log('server started listening at http://localhost/5555')
})