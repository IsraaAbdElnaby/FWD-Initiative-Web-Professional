// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=e2072e5f8ca02ca2593dab756fe86af6&units=imperial";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const button = document.getElementById("generate");

// Event listener to add function to existing HTML DOM element
button.addEventListener('click', generate);

/* Function called by event listener */
function generate (g) {
    const zipCode = document.getElementById("zip").value;
    const feel = document.getElementById("feelings").value;
    
    getAPIData(baseUrl, zipCode, apiKey)
    .then((data) => {
        postData('/inputFeeling', {date: newDate, temp: data.main.temp, feeling: feel});
    })
    .then (
        updateUI
    );
};

/* Function to GET Web API Data*/
const getAPIData = async(url, code, key) => {
    const res = await fetch(url+code+key);

    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}
/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const inputData = await res.json();
        return inputData;
    }catch(e) {
        console.log('error', e);
    }
}


/* Function to GET Project Data */
const updateUI = async () => {
    const req = await fetch("/all");

    try {
        const data = await req.json();
        console.log(data);
        document.getElementById("date").innerHTML = data[data.length - 1].date;
        document.getElementById("temp").innerHTML = data[data.length - 1].temp;
        document.getElementById("content").innerHTML = data[data.length - 1].feeling;
    }catch (error) {
        console.log(error);
    }
}