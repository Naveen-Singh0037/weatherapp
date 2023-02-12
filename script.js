const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ecf0263fcmshd22a60c03b641c5p1b5b6cjsn30b5deccb1cc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
     cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response =>{
		console.log(response)
        temp2.innerHTML = response.temp
        temp.innerHTML = response.temp
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		humidity.innerHTML = response.humidity
		wind_speed2.innerHTML = response.wind_speed
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")