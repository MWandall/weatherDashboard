var city = [];
var apiKey = "63a571e51adddf10894d6404790f00a2";

var forecast ="api.openweathermap.org/data/2.5/forecast?q={city name}&appid=63a571e51adddf10894d6404790f00a2";
// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={API key}

fetch(forecast)
// "//api.openweathermap.org/data/2.5/forecast?lat=32.77&lon=96.79&appid=63a571e51adddf10894d6404790f00a2&units=imperial"


console.log('hello world');




// , {
//     cache: 'reload',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });