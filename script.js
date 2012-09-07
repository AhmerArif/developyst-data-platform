var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/developyst.map-9bbznfb7.jsonp',
    'http://a.tiles.mapbox.com/v3/developyst.pmiu_teacher_attendance.jsonp',
	'http://a.tiles.mapbox.com/v3/developyst.punjab_teacher_presence.jsonp',
    'http://a.tiles.mapbox.com/v3/developyst.pmiu_student_attendance.jsonp',
];

$('#map').mapbox(TileJSONs, function(map, tiledata) {
	map.setPanLimits([{ lat: 37.5, lon: 60.219 }, { lat: 22.339, lon: 82.933 }]);
    // Assign readable names to all layers
    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('teacher_attendance_change');
    map.getLayerAt(2).named('teacher_attendance');
    map.getLayerAt(3).named('student_attendance');

    // Don't composite base layer with other layers
    map.getLayer('base').composite(false);

    // Disable all overlay layers by default
    map.disableLayer('teacher_attendance');
    map.disableLayer('teacher_attendance_change');
    map.disableLayer('student_attendance');
	map.interaction.auto().off('on').off('off').on(wax.movetip().parent(map.parent).events());
	map.ui.refresh();

    // Set initial latitude, longitude and zoom level
    map.setCenterZoom({
        lat: 29.95,
        lon: 68.994
    }, 6);

    // Set minimum and maximum zoom levels
    map.setZoomRange(5, 16);
    // Enable share control
    mapbox.share().map(map).add();
	map.ui.attribution.remove();

});
