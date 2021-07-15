window.addEventListener('DOMContentLoaded', (event) => {
    function simpleAlert() {
        alert("Button Pressed")
    }
    const createSessionButton = document.getElementById('create-session-button')
    createSessionButton.addEventListener("click", () => {
         // simpleAlert()
        fetch('http://localhost:8000/', {
            method: 'POST'
        }).then(
            (response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.session_id);
                const sessionid = data.session_id

                const sessionidfield = document.getElementById('session-id-field');

                sessionidfield.innerHTML = sessionid
            });
    })
    // alert("Dom Loaded")
    console.log('DOM fully loaded and parsed');
});
