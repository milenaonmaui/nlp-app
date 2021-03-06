const dotenv = require('dotenv');
dotenv.config();
//API call
//https://api.meaningcloud.com/sentiment-2.1?key=<API_KEY>&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&lang=en
//const url = "https://www.cnn.com/politics/live-news/biden-presidency-trump-impeachment-1-27-21/index.html"
const key = process.env.API_KEY;
const port = process.env.PORT || 8081
var path = require('path')
const express = require('express')
//onst mockAPIResponse = require('./mockAPI.js')
//const apiResponse = require('./apiCall.js');
const getSentimentAnalysis = require('./apiCallFetch.js');

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

//app.use(express.static('dist'))
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`NLP app listening on port ${port}!`)
})

app.post('/data', function (req, res) {
    console.log("In POST with body", req.body)
    getSentimentAnalysis(req.body, key)
    .then(resp => {
        console.log("Sending response ", resp)
        res.send(resp)})
})
