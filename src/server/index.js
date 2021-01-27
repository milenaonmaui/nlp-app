const dotenv = require('dotenv');
dotenv.config();
//API call
//https://api.meaningcloud.com/sentiment-2.1?key=<API_KEY>&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&lang=en
const url = "https://www.cnn.com/politics/live-news/biden-presidency-trump-impeachment-1-27-21/index.html"
const key = process.env.API_KEY;
var path = require('path')
const express = require('express')
c//onst mockAPIResponse = require('./mockAPI.js')
//const apiResponse = require('./apiCall.js');
const getSentimentAnalysis = require('./apiCallFetch.js');

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('NLP app listening on port 8080!')
})

app.get('/test', function (req, res) {
    getSentimentAnalysis(url, key)
    .then(resp => res.send(resp))
})
