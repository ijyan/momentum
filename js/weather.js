const API_KEY = '3094f59490e5027536d436d0b9f4ed99';
const city = document.querySelector('.weather span:first-child');
const weather = document.querySelector('.weather span:last-child');

function onGeoSuccess(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // &units=metric : 섭씨 온도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = `${data.weather[0].main}️`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    city.innerText = 'Please allow access to the location.';
}

//getCurrentPosition(success,error,[options])
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
