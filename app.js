
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


async function makeRequest() {
    await fetch('https://serene-wing-4e1877.netlify.app/degrees.json')
        .then(response => 
            // check the status, and if it's not okay, throw an error
            //if (!response.ok) {
                //throw new Error("Status Issue " + response.status);
            //}
            response.json().then(data => ({status: response.status, body: data})))
        // .then(function(response) {

        //     // print status to the console
        //     console.log(`Status: ${response.status}`);
            
        //     // check the status, and proceed if status is ok
        //     if (response.status === 200) {
        //     response.json();
        //     }
        //     // if status is not ok, print error message to the console
        //     else {
        //         console.log("Sorry, there was an error when fetching your data!")
        //     }
        // })
        .then(data => console.log(data));
}
