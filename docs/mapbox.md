MapBox.js by Lt
==


## Adding
```
meteor add trepafi:mapbox
```

## Usage
* Create a container for the map
```
<template name="mapbox">
    <div class="ui segment">
        <div id='map'></div>
    </div>
</template>
```

- Call the mapboxjs api
```
Template.mapbox.rendered = function() {
    L.mapbox.accessToken = '<your access token here>';
    var map = L.mapbox.map('map', 'examples.map-zr0njcqy').setView([40, -74.50], 9);
};
```
    - You can create your access token at [MapBox admin](https://www.mapbox.com/account/apps/)
    - The second parameter at `L.mapbox.map` is the code for the style view


- Create a route in the router config file
```
Router.route('/mapbox');
```
