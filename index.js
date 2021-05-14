function initMap(){
    var containerMap= document.querySelector("#map");
    var configCurrentPosition = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var coordinate = new google.maps.LatLng(latitude, longitude);

        console.log("coordinate: " + coordinate);

        var option = {
            center: coordinate,
            zoom: 19
        }

        var map = new google.maps.Map(containerMap, option);

        var configMarker = {
            position: coordinate,
            map: map,
            title: "Você está aqui"
        };

        var marker = new google.maps.Marker(configMarker);
    }

    function error(err){
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, configCurrentPosition);
}