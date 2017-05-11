function load() {
  function elById(id) {
    return document.getElementById(id);
  };

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(47.678912, -122.387695),
    mapTypeId : google.maps.MapTypeId.ROADMAP,
    scaleControl: true
  };
  var map = new google.maps.Map(elById("map"), mapOptions);
  map.fitBounds(new google.maps.LatLngBounds(
    new google.maps.LatLng(47.659318, -122.396622),
    new google.maps.LatLng(47.673075, -122.364178)));

  var infraOptions = {
    map: map,
    baseHref: 'resources.html'
  };
  var m = new InfraStructuredMap(infraOptions);

  m.addModePropertyToggle(elById('toggle_ped_bike'), 'Pedestrian / Bike');
  m.addModePropertyToggle(elById('toggle_transit'), 'Transit');
  m.addModePropertyToggle(elById('toggle_freight'), 'Freight');
  m.addModePropertyToggle(elById('toggle_other'), 'Other');

  m.addStatusPropertyToggle(elById('toggle_completed'), 'completed');
  m.addStatusPropertyToggle(elById('toggle_planned'), 'planned');
  m.addStatusPropertyToggle(elById('toggle_eval'), 'eval');

  m.addTimelinePropertyToggle(elById('toggle_recent'), 'recent');
  m.addTimelinePropertyToggle(elById('toggle_ongoing'), 'ongoing');
  m.addTimelinePropertyToggle(elById('toggle_soon'), 'soon');
  m.addTimelinePropertyToggle(elById('toggle_someday'), 'someday');

  m.load(window.mapData);
}
