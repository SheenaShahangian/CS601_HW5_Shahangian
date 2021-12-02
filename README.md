# Read Me - MET CS 601 Sheena Shahangian

Per the professor's request during lecture, I have hosted my assignment with Netlify. As such, you can find my index.html file at the following URL: https://serene-wing-4e1877.netlify.app/

Please click on that link in order to run this program. As the assignment instructions indicate, this link (rather than opening the index.html file locally) will be the only way to use fetch.

In order to run the program, I have created a styled and designed page (live hosted link above). This page has instructions, along with a button you can press to fetch my degree data. **Please note**, the degree data will replace the instructions paragraph when you click the button. You'll notice the white paragraph contents will now be different when you click the button (I will include before and after screenshots below for reference of a sample run I did of this program to show you what I mean).

The JSON file I created can be found at: https://serene-wing-4e1877.netlify.app/degrees.json

Per the instructions, I have located my JavaScript program (by the name of app.js) in the same directory as my JSON file.

When looking at the zipped folder, the directory structure is a follows:

* The css folder contains the stylesheet, by the name of "styles.css".
* The multimedia folder contains a single image, that is the degree site's logo.
* The main folder contains the app.js and degrees.json files.
* The program can be run by clicking on the live hosted URL above and clicking the "Let's Start" button.

### Before Clicking the Let's Start Button

As you can see below, we start with a page with instructions.

![](/Users/sheenashahangian/Desktop/Screen Shot 2021-12-02 at 10.34.08 AM.png)

### After Clicking the Let's Start Button

The difference is subtle here, but you'll notice the paragraph of text that contained instructions has been replaced with a paragraph containing my degree data that I fetched.

![](/Users/sheenashahangian/Desktop/Screen Shot 2021-12-02 at 10.34.20 AM.png)




## GitHub

To view this project on GitHub, please visit this link: https://github.com/SheenaShahangian/CS601_HW5_Shahangian

The repository is public, however should you have any trouble accessing it, please do not hesitate to reach out to me. I can be reached at sheenas@bu.edu.


## Requested Elements

Per the instructions, I have used the JSON file from the module notes as my guide when creating my own JSON file, which can be found at this link: https://serene-wing-4e1877.netlify.app/degrees.json

The JSON file can also be found in the submitted zipped folder, with the filename degrees.json. This has been run through the JSON validator and does validate.

Per the instructions, I have done the following in my app.js file, which contains my program's logic.

* I have uploaded my json file (degrees.json) to the web server. It can be found via this link: https://serene-wing-4e1877.netlify.app/degrees.json
* I have created a JavaScript program (located in app.js) that does the following:
  * It creates a fetch request to return a promise.
  * It resolves the promise using the Response class.
  * It checks the status code of the response (I do this in a conditional statement, but I also print this information to the console as well, for good measure).
  * I process the returned JSON data using JavaScript. I opted to use all of the data stored in the JSON file, which I then wrote to the html page in a paragraph format.

* I have uploaded my JS program (app.js) to the same directory as my JSON file. You can find a direct live link to my JS here: https://serene-wing-4e1877.netlify.app/app.js
* I have made sure to run this program numerous times to ensure it works. To go above and beyond, I have also tested it in more than one browser, too.

### Incorporation of Other Additional Elements - How I Went Above and Beyond

I've attempted to add some new features beyond the standard requirements listed in the rubric. These include: 

* I have tested my program in Google Chrome, Firefox, and Safari to ensure it works as expected in multiple browsers.
* I have designed and styled my page so that it is a clean and easy to use user interface.
* I have used new ES6 features, such as arrow functions, let and const. I have also used an async function, per the professor's recommendation (ES8).
* While not explicitly asked for in the instructions, I have opted to write my degree data back into the html page, so the user doesn't have to reference the console if they don't want to.
* I have ensured that I have not only checked the status code of the response, but that I have a catch statement that gracefully handles those issues.
* Per the professor's recommendation, I have opted to use let and const rather than var for declaring my variables, as I wanted to experiment with having block level scope, which var does not offer.
* I have thoroughly commented all of my code, to make it easy to understand and come back to in the future.
* While not explicitly mentioned in the instructions this week, I made sure to run my HTML and CSS through the validators to ensure they don't produce any errors.