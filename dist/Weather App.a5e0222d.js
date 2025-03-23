"use script";
// import { API_URL } from "./config";
// "https://api.openweathermap.org/data/2.5/weather?q={city name}";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Nigeria`;
const KEY = `b360eaf0044003832a1c9bab38ece420`;
const loadWeather = async function() {
    try {
        const response = await fetch(API_URL + `&appid=${KEY}`);
        const data = await response.json();
        console.log(data);
    } catch (err) {}
};
loadWeather();
const test = 2;
console.log(test);

//# sourceMappingURL=Weather App.a5e0222d.js.map
