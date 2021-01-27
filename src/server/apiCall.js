var https = require('follow-redirects').https;
//var fs = require('fs');

function getSentimentAnalysis2(url, key) {
    const resp = {
        status: { code: '0', msg: 'OK', credits: '7', remaining_credits: '19911' },
        model: 'general_en',
        score_tag: 'P',
        agreement: 'DISAGREEMENT',
        subjectivity: 'SUBJECTIVE',
        confidence: '86',
        irony: 'NONIRONIC',
    } 
 
    const options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': '/sentiment-2.1?key=' + key + '&lang=en&url='+url,
        'headers': {
        },
        'maxRedirects': 20
    };

    const req = https.request(options, function (res) {
        var chunks = [];
   
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            console.log(JSON.parse(Buffer.concat(chunks).toString()))
        });

        res.on("error", function (error) {
            console.error(error);
        
        });
    });

    req.end();
    
}

module.exports = getSentimentAnalysis2