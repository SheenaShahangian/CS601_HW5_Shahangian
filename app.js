// get the paragraph of text from the webpage, which we will replace with the degree information
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
                throw "Sorry there was an issue gathering your data!";
            }
        }
    ).then(
        (data) => {
            // gather data from the first college degree (array index 0)
            const firstSchool = `<td>${data.my_degrees[0].degree.school}</td>`;
            const firstDegree = `<td>${data.my_degrees[0].degree.major}</td>`;
            const firstDegreeType = `<td>${data.my_degrees[0].degree.type}</td>`;
            const firstGraduationYear = `<td>${data.my_degrees[0].degree.year}</td>`;

            // gather data from the second college degree (array index 1)
            const secondSchool = `<td>${data.my_degrees[1].degree.school}</td>`;
            const secondDegree = `<td>${data.my_degrees[1].degree.major}</td>`;
            const secondDegreeType = `<td>${data.my_degrees[1].degree.type}</td>`;
            const secondGraduationYear = `<td>${data.my_degrees[1].degree.year}</td>`;

            const degreeTable = `<table>
            <tr>
            <th>School</th>
            <th>Major</th>
            <th>Degree Type</th>
            <th>Graduation Year</th>
            </tr>
            <tr>${firstSchool}${firstDegree}${firstDegreeType}${firstGraduationYear}</tr>
            <tr>${secondSchool}${secondDegree}${secondDegreeType}${secondGraduationYear}</tr>
            </table>`

            // write the degree content to the page
            degreeInfoContainer.innerHTML = degreeTable;
        }
    )
    // error message if there's an issue fetching data
    .catch(error => {
        console.log("Bummer! There was an issue fetching your data!");
    });
}

