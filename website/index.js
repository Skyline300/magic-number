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

    // Get a reference of the guess button
    const guessButton = document.getElementById('guess-button');

    // Add a event listener for the click event
    guessButton.addEventListener('click', function () {

        // Get reference to the 2 input field
        const sessionIdInput = document.getElementById('session-id-input');
        const attemptInput = document.getElementById('attempt-input');

        // Extract the value of the 2 input field and put into variables
        const sessionId = sessionIdInput.value;
        const attempt = attemptInput.value;

        // Create the url
        const url = `http://localhost:8000/${sessionId}?attempt=${attempt}`;

        // Send HTTP Request
        fetch(url, { method: 'PUT' })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                // Extract the lower and upper bound
                const lowerBound = json[0];
                const upperBound = json[1];

                // Get the reference to the label element
                const lowerBoundLabel = document.getElementById('lower-bound-label');
                const upperBoundLabel = document.getElementById('upper-bound-label');

                // Update the label
                lowerBoundLabel.innerHTML = lowerBound;
                upperBoundLabel.innerHTML = upperBound;
            });
    });
    // alert("Dom Loaded")
    console.log('DOM fully loaded and parsed');
});
