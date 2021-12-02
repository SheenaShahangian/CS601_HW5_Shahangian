

// url for the JSON file
let degreesUrl = "https://serene-wing-4e1877.netlify.app/degrees.json";
// async function makeRequest(url) {
//     // fetch the url
//     await fetch(url)
//         // the ".then" listed below will run when we get a response from the server
//         .then(function(response) {

//             // print status to the console
//             console.log(`Status: ${response.status}`);

//             // check the status, and proceed if status is ok
//             if (response.status === 200) {
//                 //response.json();
//             }
//             // if status is not ok, print error message to the console
//             else {
//                 console.log("Sorry, there was an error when fetching your data!")
//             }
//         })
//         .then(function(data) {
//             console.log("data");
//             console.log(data);
//             return data;
//         })
// }

// let degreeData = makeRequest("https://serene-wing-4e1877.netlify.app/degrees.json");

// function tester() {
//     console.log("hey, we're here");
//     console.log(makeRequest());
//     console.log("hey, we're done");
// }

// async function makeRequest() {
//     await fetch(degreesUrl)
//         .then(response => 
//             response.json()
//         .then(data => ({status: response.status, body: data})))
//         //.then(data => console.log(data));
// }

let degreeArray = [];

fetch(degreesUrl).then(
    (response) => {
        // log the status
        console.log(`Status ${response.status}`);

        // return the JSON object
        return response.json();
    }
).then(
    (data) => {
        console.log("LENGTH: " + data.length)
        console.log(data.degree.school);
    

    }
)
// error message if there's an issue
.catch(error => {
    console.log("Bummer! There was an issue fetching your data!");
})

