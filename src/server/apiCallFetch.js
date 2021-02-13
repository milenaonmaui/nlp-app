const fetch = require('node-fetch')

const getSentimentAnalysis = async(data={}, key) => {
    console.log('In getSentimentanalysis, URL', data)
    //const fullURL = 'https://api.meaningcloud.com/sentiment-2.1?key=' + key +'&lang=en&url=' + url;
    const text="Main dishes were quite good, but desserts were too sweet for me."
    //ctxt=' + text;
    fullURL = 'https://api.meaningcloud.com/sentiment-2.1?key=' + key +'&lang=en&'
    if (data.url !== ""){
        fullURL += 'url=' + encodeURI(data.url)
        console.log(fullURL)
    } else if (data.text !== "") {
        fullURL += 'txt=' + encodeURI(data.text)
        console.log(fullURL)
    }
    const resp = await fetch(fullURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        }
    });
    try {
        const data = await resp.json();
        console.log(data)
        return {
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony, 
            score_tag: data.score_tag
        }

    } catch(error) {
        console.log(error)
        return {error: error}
    }
}

module.exports = getSentimentAnalysis