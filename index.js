


apikey = "4c169ca4b58dd5d633f81551b606ead1"

apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// access the classes from the html file  

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    // used async await function for stopping exicution until the promise is not fully resolve

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";

        document.querySelector(".weather").style.display = "none";

        // used  validation as the data is not fetch then shows the error message

    } else {


        var data = await response.json();
        console.log(data);

        //    data veriable is used to stored the json object

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        // This Selectors are used to access the json object

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "clouds.png";

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "mist.png";
        }

        // this if else block is used to change images as per the weather condition.

        document.querySelector(".weather").style.display = 'block';
        document.querySelector(".error").style.display = "none";

        // // this selector is used to show the weather container from UI/
    }
}
     searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);

    // used to call the main function with the event handler  addEventListener("click").

});




