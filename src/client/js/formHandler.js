console.log("loaded formHandler.js")
function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = "";
    // check what text was put into the form field
    let url = document.getElementById('url').value;
    let text = document.getElementById('textEntry').value;
    //checkForName(formText)
    const data = {url: '', text: ''};
    console.log("::: URL :::", url)
    if (url !== "") {
        data.url = url
    } else if (text !== "") {
        data.text = text
    } else {
        document.getElementById('results').innerHTML = "Please enter valid URL or text"
        return false;
    }

    console.log("Data", data)
    console.log(JSON.stringify(data))
    fetch('http://localhost:8080/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    //fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = '<p><b>Agreement: </b>'+res.agreement+'</p>'+
        '<p><b>Subjectivity: </b>'+res.subjectivity+'</p>' +
        '<p><b>Confidence: </b>'+res.confidence+'</p>' +
        '<p><b>Irony: </b>'+res.irony+'</p>';
    })
}

//export { handleSubmit }
