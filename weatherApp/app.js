contianer1 = document.querySelector('.container1');

const API_KEY = "0cd4c04d335aea13aa2b688392016414";

getWeather();
function getWeather() {
    navigator.geolocation.getCurrentPosition((success) => {
        let{latitude , longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            showWeather(data);
        })
    })
}

function showWeather(data) {
    if (data.current.weather[0].icon === '01d') {
        document.body.style.backgroundImage = "url('/imgs/sunny.jpg')";
        document.body.style.color = "black";
    } else if (data.current.weather[0].icon === '02d') {
        document.body.style.backgroundImage = "url('/imgs/aBitCloudy.jpg')";
    } else if (data.current.weather[0].icon === '03d' || data.current.weather[0].icon === '04d') {
        document.body.style.backgroundImage = "url('/imgs/cloudy.jpg')";
    } else if (data.current.weather[0].icon === '09d' || data.current.weather[0].icon === '10d' || data.current.weather[0].icon === '11d') {
        document.body.style.backgroundImage = "url('/imgs/rain.jpg')";
    } else {
        document.body.style.backgroundImage = "url('/imgs/cold.jpg')";
    };

    let{humidity, wind_speed, pressure, temp, sunrise, sunset} = data.current;
    let todayWeather = data.current.weather[0].main;
    let timezone = data.timezone;
    let weatherIcon = data.current.weather[0].icon;

    
    setInterval(() => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const time = new Date();

        let date = days[time.getDay()] + ', ' + time.getDate() + ' ' + months[time.getMonth()] + ' / ' + time.getHours() + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes());
        // console.log(date)
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
                        <div class="eachProp">
                            <span>Sunrise</span>
                            <span>${window.moment(sunrise*1000).format('HH:mm a')}</span>
                        </div>
                        <div class="eachProp">
                            <span>Sunset</span>
                            <span>${window.moment(sunset*1000).format('HH:mm a')}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }, 1000);
    
    const otherDays = document.querySelector('.section2');
    let plusOtherDays = '';
    data.daily.forEach((day, index) => {
        // console.log(day);
        if (index === 0 || index === 7) {

        } else {
        plusOtherDays += `
        <div class="smallDay">
            <div class="smDisplay">
                <span>${window.moment(day.dt * 1000).format('ddd')}</span>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
            </div>
            <div class="dtntTem">
                <div class="dtntVal">
                    <span>Day: </span>
                    <span>${day.temp.day}° C</span>
                </div>
                <div class="dtntVal">
                    <span>Night: </span>
                    <span>${day.temp.night}° C</span>
                </div>
            </div>
        </div>
        `;}       
    });
    otherDays.innerHTML = plusOtherDays;
}