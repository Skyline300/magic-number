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

// Middleware for making attempt
// /:sessionId to extract param from path
app.put('/:sessionId', function (req, res) {
    // extract sessionId from params
    const sessionId = req.params.sessionId;

    // extract attempt from query
    const attempt = req.query.attempt;

    // retrieve appropriate magicNumberGame based on the session Id
    const magicNumberGame = sessions[sessionId];

    // Make a guess and get the progress
    const progress = magicNumberGame.guess(attempt);

    // Send the progress, treat it as JSON and put the JSON string in the response body
    return res.json(progress);
});
app.listen(8000,function () {
    console.log('Listening on port 8000')
})