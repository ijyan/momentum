function onGeoSuccess(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log('you live in', lat, lng);
}

function onGeoError() {
    alert("Can't find you");
}

//getCurrentPosition(success,error,[options])
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
