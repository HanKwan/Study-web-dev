contianer1 = document.querySelector('.container1');

const API_KEY = "0cd4c04d335aea13aa2b688392016414";

getWeather();
function getWeather() {
    navigator.geolocation.getCurrentPosition((success) => {
        let{latitude , longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showWeather(data);
        })
    })
}

function showWeather(data) {
    let{humidity, wind_speed, pressure, temp} = data.current;
    let todayWeather = data.current.weather[0].main;
    let timezone = data.timezone;
    let weatherIcon = data.current.weather[0].icon;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const time = new Date();
    let date = days[time.getDay()] + ', ' + time.getDate() + ' ' + months[time.getMonth()]

    contianer1.innerHTML = `
    <div class="section1">
        <div id="dateLocation">
            <div>${timezone}</div>
            <div class="date">${date}</div>
        </div>
        <div id="temp">
            <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png">
            <span>${temp}° C</span>
        </div>
        <div class="container2">
            <div class="otherProps">
                <div class="eachProp">
                    <span>Weather</span>
                    <span>${todayWeather}</span>
                </div>
                <div class="eachProp">
                    <span>Pressure</span>
                    <span>${pressure} hPa</span>
                </div>
                <div class="eachProp">
                    <span>Humidity</span>
                    <span>${humidity} %</span>
                </div>
                <div class="eachProp">
                    <span>Wind Speed</span>
                    <span>${wind_speed} mps</span>
                </div>
            </div>
        </div>
    </div>
    `;
}