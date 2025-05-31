async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "8a6aac8ed592dba9d7615548b5920a55"; // replace with real key
  
    if (!city) {
      alert("Please enter a city name!");
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const weatherData = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherData;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }
  