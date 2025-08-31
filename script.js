const apiKey = '613ded1cccb919ccc405aa6146c2caf1'; // Make sure it's active
const input = document.getElementById("input");
const cityName = document.getElementById("city-name");
const date = document.getElementById("date");
const icon = document.getElementById("weather-icon");
const temp = document.getElementById("temperature");
const desc = document.getElementById("description");
const wind = document.getElementById("wind-speed");
const weatherInfo = document.getElementById("weather-info");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	const city = input.value.trim();
	if (city !== "") {
		checkWeather(city);
	}
});

async function checkWeather(city) {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error("City not found");
		}
		const data = await response.json();

		// Fill the weather info
		const today = new Date();
		cityName.textContent = data.name;
		date.textContent = today.toDateString();
        temp.textContent = `🌡 Temperature: ${data.main.temp} °C`;
		desc.textContent = `☁️ ${data.weather[0].description}`;
		wind.textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;

		weatherInfo.style.display = "block";
	} catch (error) {
		weatherInfo.innerHTML = `<p style="color:red">${error.message}</p>`;
	}
}



