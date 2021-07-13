window.addEventListener('DOMContentLoaded', (event) => {
    function simpleAlert() {
        alert("Button Pressed")
    }
    const createSessionButton = document.getElementById('create-session-button')
    createSessionButton.addEventListener("click", () => {
        simpleAlert()
        fetch('localhost:8000/', {
            method: 'PUT'
        }).then(response => response.json())
            .then(data => console.log(data));
    })
    alert("Dom Loaded")
    console.log('DOM fully loaded and parsed');
});
