const fetch = require('node-fetch')

const getSentimentAnalysis = async(url='', key) => {
    console.log('In getSentimentanalysis, URL', url)
    const fullURL = 'https://api.meaningcloud.com/sentiment-2.1?key=' + key +'&lang=en&url=' + url;
    const res = await fetch(fullURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        }
    });
    try {
        const data = await res.json();
        return {
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony, 
            score_tag: data.score_tag
        }

    } catch(error) {
        console.log(error)
    }
}

module.exports = getSentimentAnalysis