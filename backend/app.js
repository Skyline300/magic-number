const express = require('express')
const app = express()
const cors = require('cors')
const {nanoid} = require('nanoid')
const MagicNumberGame = require('../logic/MagicNumberGame');

app.use(cors())


const sessions = {}
app.post('/',function(req,res){
    const sessionId = nanoid(10);
    console.log(sessions)
    console.log("==================")
    sessions[sessionId] = new MagicNumberGame(100);
    console.log(sessions)
    res.json({session_id: sessionId})
})

app.listen(8000,function () {
    console.log('Listening on port 8000')
})