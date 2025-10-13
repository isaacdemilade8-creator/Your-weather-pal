function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "c0feb67e70eb843e9bccaa15878bd876";

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(url); 

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found or invalid API key");
      }
      return response.json();
    })
    .then(data => {
      const result = `
        <h2>${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}