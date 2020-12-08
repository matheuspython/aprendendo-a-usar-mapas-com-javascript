var platform = new H.service.Platform({
    'apikey': 'wHiSI7X6RXpOuF-rjfDslsPhzMheVNFuEctZxdup6_E'
});


// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map, {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
    });