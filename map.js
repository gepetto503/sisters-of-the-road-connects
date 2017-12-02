// CREATE MAP
var lat = 45.5148906
var long = -122.6760716

var mymap = L.map('mapid').setView([lat, long], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/michellejl/cjapnyfhz54t92srsbcmaxlpv/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoibWljaGVsbGVqbCIsImEiOiJjamFwbjhiejkzeXZqMzFucWUxMmpoOW1iIn0.jy-E343ZsoMocqnEq_ovfA'
}).addTo(mymap);


// CREATING ICONS
var iconSize = 35;

var CustomIcon = L.Icon.extend({
  options: {
    iconSize:     [iconSize, iconSize], 
    iconAnchor:   [iconSize, iconSize], 
    popupAnchor:  [-(iconSize/2), -iconSize] 
  }
});
var toiletIcon = new CustomIcon({iconUrl: 'img/toilet.png'})
var showerIcon = new CustomIcon({iconUrl: 'img/shower.png'})

// PLACE NEW MARKER ON MAP
$('#add-marker').on('click', function(event) {
  event.preventDefault();

  iconType = getIconType();
  lat = $('#lat').val();
  long = $('#long').val();
  var marker = L.marker([lat,long], {icon: iconType})
  marker.addTo(mymap);

  popupText = createPopup();
  marker.bindPopup(popupText);
  // marker.openPopup();
})

function createPopup() {
  var locName = $('#name').val();
  var info = '';
  info += '<strong>' + locName + '</strong>';
  return info;
}

function getIconType() {
  var icon= $("input[name='category']:checked").val();
  console.log(icon)
  switch (icon) {
    case 'bathroom':
      icon = toiletIcon;
      break;
    case 'shower':
      icon = showerIcon;
      break;
  }
  return icon;
}


function onMapClick(e) {
  lat = e.latlng.lat;
  long = e.latlng.lng;
  $('#lat').val(lat);
  $('#long').val(long);
}

mymap.on('click', onMapClick);