
async function makeRequest(url) {
    // fetch the url
    await fetch(url)
        // the ".then" listed below will run when we get a response from the server
        .then(function(response) {

            // print status to the console
            console.log(`Status: ${response.status}`);

            // check the status, and proceed if status is ok
            if (response.status === 200) {
                return response.json();
            }
            // if status is not ok, print error message to the console
            else {
                console.log("Sorry, there was an error when fetching your data!")
            }
        })
}

let degreeData = makeRequest("https://serene-wing-4e1877.netlify.app/degrees.json");

function processDegreeData() {
    console.log(degreeData);
}