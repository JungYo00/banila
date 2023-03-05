const API_KEY = "71ad16737b74928f785d21891d74a475";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=> {
        const weather = document.querySelector("#f");
        const city = document.querySelector("#s");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert(" error");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);