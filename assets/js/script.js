var apiKey = "63a571e51adddf10894d6404790f00a2";
var searchBtnEl = document.getElementById("searchBtn");
var searchFormEl = document.getElementById("search-form");
var inputField = document.querySelector("#search-input");
var testResult = document.querySelector('#result-content')
var todayEl = document.getElementById("today");
var forecastContainerEl = document.getElementById("forecastContainer")

async function fetchWeather(coordsObj) {
  console.log(coordsObj);
  var { lat } = coordsObj;
  var { lon } = coordsObj;
  var { name } = coordsObj;
  var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

  const response = await fetch(forecastUrl);
  const data = await response.json();
  
  console.log(data.city.name);
  console.log(data.list[0].main.temp);
  console.log(data.list[0].main.humidity);
  console.log(data.list[0].wind.speed);

}

async function fetchCoords(city) {
  var testUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
  // var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
  var requestUrl = testUrl + city + "&appid=" + apiKey + "&units=imperial";
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data[0]);

  var cityNameEl = document.createElement('h1')
  cityNameEl.innerHTML = data[0].name
testResult.append(cityNameEl)
  fetchWeather(data[0]);
}



// var searchHistoryArr = ["john",'mike']
// localStorage.setItem('name', firstName)
// var storedNames = localStorage.getItem('name')
// console.log("hello world", storedName);

// *API calls

function formSubmitHandler(event) {
  event.preventDefault();
  var searchTerm = inputField.value.trim();
  fetchCoords(searchTerm);
}


function displayFiveDayWX(dayObj) {

    var cardHTML = $(`
    <div class="col">
        <div class="card">
        <img src="https://openweathermap.org/img/wn/${dayObj.weather[0].icon}@2x.png" class="card-img-top" alt="${dayObj.weather[0].description}">
        <div class="card-body">
            <h5 class="card-title">${dayjs(dayObj.dt_txt).format("MM/DD/YYYY")}</h5>
            <ul>
            <li>Temp: ${dayObj.main.temp} °F</li>
            <li>Wind: ${dayObj.wind.speed} MPH</li>
            <li>Humidity: ${dayObj.main.humidity}%</li>
            </ul>
        </div>
        </div>
    </div>
    `);

    fiveDayContainer.append(cardHTML);
}

searchFormEl.addEventListener("submit", formSubmitHandler);




// searchFormEl.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var city = inputField.value;
//     console.log(city);
//     var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

//     fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         var lon = data.coord.lon;
//         var lat = data.coord.lat;
//         fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey)
//         console.log(data)

// })
// });

// *want to refactor to dynamically append card elements to page instead of hard code

// *fill day, icon, temp, humidity in appended li elements in card element

// *remove shown searches by targeting .innerhtml = "" when doing a new search (probably have to do with search history too)

// *append prev searches as buttons to page under aside

// *have buttons add event listener to refill text input to show old searches back on main

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented

// function getApi() {
//     var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
//     fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)

//         var lon = data.coord.lon;
//         var lat = data.coord.lat;
//         fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey)
//     });
// }

// searchBtnEl.addEventListener("click", getApi)
// console.log(getApi);

// , {
//     cache: 'reload',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
