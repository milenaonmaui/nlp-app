console.log("loaded formHandler.js")
function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = "";
    // check what text was put into the form field
    let url = document.getElementById('url').value
    //checkForName(formText)

    console.log("::: URL :::", url)
    const data = {url: url}
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
        document.getElementById('results').innerHTML = res.agreement;
    })
}

//export { handleSubmit }
