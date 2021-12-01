function makeRequest(url) {
    // fetch the url
    fetch(url)
        // the ".then" listed below will run when we get a response from the server
        .then(function(response) {
            return response.json();
            // log the status code of the response
            console.log(response.status);
        })
        // in case of an error, print a message to the console
        .catch(function(error) {
            console.log("Sorry, there was an error when fetching your data!");
        })
}

makeRequest("https://serene-wing-4e1877.netlify.app/degrees.json");