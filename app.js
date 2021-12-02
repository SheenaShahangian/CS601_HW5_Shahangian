// get the button from the page, which we will replace with the degree information
let degreeInfoContainer = document.getElementById("degree_info");


// url for the JSON file
let degreesUrl = "https://serene-wing-4e1877.netlify.app/degrees.json";

async function fetchDegreeData() {
    // fetch the data in the JSON file
    await fetch(degreesUrl).then(
        (response) => {
            // log the status
            console.log(`Status ${response.status}`);

            if (response.status === 200) {
                // return the JSON object
                return response.json();
            }
            else {
                throw "Sorry there was an issue gathering your data!"
            }
        }
    ).then(
        (data) => {
            // gather data from the first college degree (array index 0)
            const firstSchool = data.my_degrees[0].degree.school;
            const firstDegree = data.my_degrees[0].degree.major;
            const firstDegreeType = data.my_degrees[0].degree.type;
            const firstGraduationYear = data.my_degrees[0].degree.year;

            // paragraph info that contains first degree info we want to write to the html page
            const firstDegreeInfo = `The first college degree I received was from ${firstSchool}, where I majored in ${firstDegree}. This 
            was a ${firstDegreeType}, and I graduated with this degree in ${firstGraduationYear}.`

            // gather data from the second college degree (array index 1)
            const secondSchool = data.my_degrees[1].degree.school;
            const secondDegree = data.my_degrees[1].degree.major;
            const secondDegreeType = data.my_degrees[1].degree.type;
            const secondGraduationYear = data.my_degrees[1].degree.year;

            // paragraph info that contains second degree info we want to write to the html page
            const secondDegreeInfo = `I have yet to receive my ${secondDegreeType} in ${secondDegree} from ${secondSchool}. However, I will 
            receive this degree in the year ${secondGraduationYear}.`

            const degreeInfo = firstDegreeInfo + secondDegreeInfo; // add up the strings to create full content about degrees
            console.log(degreeInfo);

            // write the degree content to the page
            degreeInfoContainer.innerHTML = degreeInfo;
        }
    )
    // error message if there's an issue fetching data
    .catch(error => {
        console.log("Bummer! There was an issue fetching your data!");
    })
}

