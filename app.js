
async function makeRequest(url) {
    // fetch the url
    await fetch(url)
        // the ".then" listed below will run when we get a response from the server
        .then(function(response) {
            // check the status, and proceed if status is ok
            if (response.status === 200) {
                // return JSON object
                return response.json();
            }
            // if status is not ok, print error message to the console
            else {
                console.log("Sorry, there was an error when fetching your data!")
            }
        })
}

makeRequest("degrees.json");