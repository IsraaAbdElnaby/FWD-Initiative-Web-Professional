// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, () => console.log("server running!"));

// Initialize all route with a callback function
app.get("/all", getAllData);
// Callback function to complete GET '/all'
function getAllData (req, res) {
    res.send(projectData);
}
// Post Route
app.post('/inputFeeling', (req, res) => {
    console.log(req.body);
    inputData = {
        date: req.body.date,
        temp: req.body.temp, 
        feeling: req.body.feeling
    }
    projectData.push(inputData);
    console.log(projectData);
    res.send(projectData);
});