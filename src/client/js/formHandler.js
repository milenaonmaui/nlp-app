console.log("loaded formHandler.js")
function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('data').innerHTML = "";
    // check what text was put into the form field
    const url = document.getElementById('url').value;
    const text = document.getElementById('textEntry').value;
    const loader = document.getElementById('loader')
    loader.removeAttribute('hidden')
    //checkForName(formText)
    const data = {url: '', text: ''};
    console.log("::: URL :::", url)
    if (url !== "") {
        data.url = url
    } else if (text !== "") {
        data.text = text
    } else {
        document.getElementById('data').innerHTML = "Please enter valid URL or text"
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
    .then(json => updateUI(json))
}

//export { handleSubmit }
