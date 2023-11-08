const apiKey="0baffefb9ce2c7ce75c63e3ee9ddad36"
const inputField = document.getElementById('cityInput');
const button = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

button.addEventListener('click', () => {
  const city = inputField.value;
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {

      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const windSpeed = data.wind.speed;
      const result = `The weather in ${city} is ${description}. The temperature is ${temperature}°C with a wind speed of ${windSpeed} m/s.`;
      weatherInfo.innerHTML = result;
    })
    .catch((error) => {
      console.error('Error:', error);
      weatherInfo.innerHTML = 'Error fetching weather data';
    });
});






