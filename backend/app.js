const express = require('express')
const app = express()
const cors = require('cors')
const nanoid = require('nanoid')

app.use(cors())

app.post('/',function(req,res,next){
    res.send("Creating New Session")
})

app.listen(8000,function () {
    console.log('Listening on port 8000')
})