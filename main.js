let map;
let marker;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"),
        {
            center:{ lat: 41.036945, lng: 28.985832 },
            zoom: 12
        }
    );

    marker = new google.maps.Marker(
        {
            map: map,
            position: { lat: 41.036945, lng: 28.985832 },
            draggable: true
        }
    );

    google.maps.event.AddListener(marker, "dragend", function(event){
        var position = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }
        console.log(position);
    });
}

function changeMapType(){
    map.setMapTypeId(document.getElementById("mapViewType").value);
}

function changeZoom(){
    map.setZoom(parseInt(document.getElementById("zoomRange").value));
}

function GoToPosition(){
    var position = {
        lat: parseFloat(document.getElementById("latInput").value),
        lng: parseFloat(document.getElementById("lngInput").value)
    }

    map.setCenter(position);
    marker.setPosition(position);
}


window.onload=initMap;