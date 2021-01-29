function handleSubmit(event) {
    console.log("Inside Form Handler")
    event.preventDefault()
    //reset form
    document.getElementById('data').innerHTML = "";
    const url = document.getElementById('url').value;
    const text = document.getElementById('textEntry').value;
    
    const data = {url: '', text: ''};
    
    if (url !== "") {
        data.url = url
    } else if (text !== "") {
        data.text = text
    } else {
        document.getElementById('data').innerHTML = "Please enter valid URL or text"
        return false;
    }
    const loader = document.getElementById('loader')
    loader.removeAttribute('hidden')

    fetch('http://localhost:8081/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    .then(res => res.json())
    .then(json => Client.updateUI(json))
}

export { handleSubmit }
