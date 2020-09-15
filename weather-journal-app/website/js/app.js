// Personal API Key for OpenWeatherMap API
const apiKey = "42b16aeaeaf48b898e3718186b714d7b";

const baseUrl = "api.openweathermap.org/data/2.5/weather?zip=";
let zipCode = document.getElementById("zip").value;
const button = document.getElementById("generate");

// Event listener to add function to existing HTML DOM element
button.addEventListener('click', generate);

/* Function called by event listener */
function generate (g) {
    console.log(zipCode);
    getData(baseUrl, zipCode, apiKey);
}
/* Function to GET Web API Data*/
const getData = async(url, code, key) => {
    const res = await fetch(url+code+key);

    try {
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("error", error)
    }

}
/* Function to POST data */


/* Function to GET Project Data */
