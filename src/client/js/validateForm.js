
    console.log("Inside validate form")
    const inputURL = document.getElementById('url');
    const notifySection = document.getElementById('notify')
    inputURL.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            notifySection.textContent   = 'Please enter valid URL';
            notifySection.className     = 'error';
            notifySection.style.display = 'block';     
            input.className    = 'invalid';
        }
    });

//export { checkForName }
