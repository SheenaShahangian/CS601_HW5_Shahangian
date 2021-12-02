

// url for the JSON file
let degreesUrl = "https://serene-wing-4e1877.netlify.app/degrees.json";



fetch(degreesUrl).then(
    (response) => {
        // log the status
        console.log(`Status ${response.status}`);

        // return the JSON object
        return response.json();
    }
).then(
    (data) => {
        console.log("DEGREE ONE");
        console.log(data.my_degrees[0].degree.school);
        console.log(data.my_degrees[0].degree.major);
        console.log(data.my_degrees[0].degree.type);
        console.log(data.my_degrees[0].degree.year);

        console.log("DEGREE TWO");
        console.log(data.my_degrees[1].degree.school);
        console.log(data.my_degrees[1].degree.major);
        console.log(data.my_degrees[1].degree.type);
        console.log(data.my_degrees[1].degree.year);

    }
)
// error message if there's an issue
.catch(error => {
    console.log("Bummer! There was an issue fetching your data!");
})

