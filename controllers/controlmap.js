import Model from '../models/mapinfo';

function initMap() {
    const { markers, centerMap } = Model;

    const mapOptions = {
        center: centerMap,
        zoom: 10,
        disableDefaultUI: true
    };

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200
    });

    markers.forEach(markerData => {
        const marker = new google.maps.Marker({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map
        });

        function createInfoWindow() {
            const infoWindowContent = `
                <div class="feh-content">
                    <p><b>${markerData.locationName}</b><p> 
                    <address><p>${markerData.address}</p></address>
                </div>`;

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);
            });
        }

        createInfoWindow();
    });
}

initMap();