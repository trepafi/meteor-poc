Template.mapbox.rendered = function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoidHJlcGFmaSIsImEiOiJEZG5BWnFBIn0.yhwue_c8WV0KZYUDRDoj-A';
    var marbella =  L.latLng(36.5167, 4.8833);
    var map = L.mapbox.map('map', 'examples.map-zr0njcqy').setView(marbella, 7);
};
