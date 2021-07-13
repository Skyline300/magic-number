window.addEventListener('DOMContentLoaded', (event) => {
    alert("Dom Loaded")
    console.log('DOM fully loaded and parsed');
    function simpleAlert() {
        alert("Button Pressed")
    }
    const createSessionButton = document.getElementById('create-session-button')
    createSessionButton.addEventListener("click", () => {
        simpleAlert()
        fetch('http://localhost:8000/', {
            method: 'PUT'
        }).then(response => response.json())
            .then(data => console.log(data));
    })

});
