// script.js
document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'dbf5deb8dee84000b9e22918240305'; // Get your API key from weatherapi.com
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.log('Error fetching weather:', error));
}

function displayWeather(data) {
    const { location, current } = data;

    const weatherInfo = `
        <h2>${location.name}, ${location.country}</h2>
        <p>Local Time: ${location.localtime}</p>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Condition: ${current.condition.text}</p>
        <img src="${current.condition.icon}" alt="${current.condition.text}">
        <p>Humidity: ${current.humidity}%</p>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}

