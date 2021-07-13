window.addEventListener('DOMContentLoaded', (event) => {
    function simpleAlert() {
        alert("Button Pressed")
    }
    const createSessionButton = document.getElementById('create-session-button')
    createSessionButton.addEventListener("click", () => {
        simpleAlert()
        fetch('http://localhost:8000/', {
            method: 'POST'
        }).then(response => response.json())
            .then(data => console.log(data.msg));
    })
    alert("Dom Loaded")
    console.log('DOM fully loaded and parsed');
});
