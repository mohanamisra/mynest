let latitude = "";
let longitude = "";
let key = "bf0a8ab5db6ce4bcfbbea6e263f07e56";
let temperature = "";
let weather = "";
let aqi = "";
let place = "Delhi";

$w.onReady(function () {

	initialize();
});

async function initialize()
{
	await getCoordinates();
}

function getCoordinates()     // Coordinates for the place.
{
	let fullUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + place + "&limit=1&appid=" + key;

	fetch(fullUrl, 
	{
		method: 'get'
	})
	.then((httpResponse) => 
	{
		if (httpResponse.ok)
		{
			return httpResponse.json()
			.then((data) => 
			{
				console.log(data);
				latitude = data[0].lat;
				longitude = data[0].lon;
				getAqi();       // Calls getAqi() after location has been fetched.
				getWeather();       // Calls to get weather details.
			})
		}
		else
		{
			return Promise.reject("Fetch unsuccessful.");
		}
	})
}

function getAqi()        // Fetches AQI.
{
	let fullUrl = "https://api.openweathermap.org/data/2.5/air_pollution?lat=" + latitude + "&lon=" + longitude + "&appid=" + key;

	console.log("Lat is: " + latitude);
	
	fetch(fullUrl, 
	{
		method: 'get'
	})
	.then((httpResponse) => 
	{
		if (httpResponse.ok)
		{
			return httpResponse.json()
			.then((data) => 
			{
				console.log(data);
				aqi = data.list[0].main.aqi;
				console.log(aqi);
			})
		}
		else
		{
			return Promise.reject("Fetch unsuccessful.");
		}
	})
}

function getWeather()        // Fetches weather and temperature.
{
	let fullUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + key;

	fetch(fullUrl, 
	{
		method: 'get'
	})
	.then((httpResponse) => 
	{
		if (httpResponse.ok)
		{
			return httpResponse.json()
			.then((data) => 
			{
				console.log(data);
				temperature = data.main.temp;
				weather = data.weather[0].main;
				console.log(temperature);
				console.log(weather);
				setValues();
			})
		}
		else
		{
			return Promise.reject("Fetch unsuccessful.");
		}
	})
}

function setValues()          // Updates page text elements.
{
	$w('#text6').text = temperature.toString() + " C";
	$w('#text10').text = aqi.toString();
	$w('#text8').text = weather;
	let status = "";
	if (aqi == "1") { status = "Very Good"; }
	else if (aqi == "2") { status = "Good"; }
	else if (aqi == "3") { status = "Moderate"; }
	else if (aqi == "4") { status = "Poor"; }
	else if (aqi == "5") { status = "Very Poor"; }
	$w('#text11').text = "(" + status + ")";
}
