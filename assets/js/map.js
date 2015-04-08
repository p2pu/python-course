var map = L.map('map').setView([16.94472, -16.34766], 3);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var data = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
            "properties": {"prop0": "value0"}
        },
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [12.0, 0.5]},
            "properties": {"prop0": "value0"}
        },
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [-73.9694, 40.7103]},
            "properties": {"prop0": "value0"}
        },
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [-73.9991, 40.8965]},
            "properties": {"prop0": "value0"}
        },
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [-73.8965,40.9935]},
            "properties": {"prop0": "value0"}
        },
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [-73.9993,40.7915]},
            "properties": {"prop0": "value0"}
        },
        { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [27.9908, -26.0854]},
            "properties": {"prop0": "value0"}
        }
    ]
};

var markers = new L.MarkerClusterGroup();
L.geoJson(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.prop0);
    }
}).addTo(markers);
map.addLayer(markers);

var popup = L.popup();

function onMapClick(e) {
    var popupText = [
        '<form>',
        '<input type="hidden" value="' + e.latlng.toString() + '"></input>',
        '<input type="text" name="name" placeholder="name"></input>',
        '<button type="submit">click</button>',
        '</form>'
    ].join('\n');
    popup
        .setLatLng(e.latlng)
        .setContent(popupText)
        .openOn(map);
}
map.on('click', onMapClick);

