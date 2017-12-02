var resources = [
  {
      "category":"shower",
      "name": "Portable Showers",
      "description":"Mobile shower unit with free showers on Saturdays.",
      "coords":[-122.672525, 45.509209],
      "createTime":"12-01-2017"
  },
  {
      "category":"sweep",
      "name": "Burnside Bridge Camp Sweep",
      "description":"20 campers losing their tents and belongings, resources needed for these individuals.",
      "coords":[-122.670879, 45.49999],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Overlook Park.",
      "description":"Clean bathroom for public use. Open from 6am-9pm.",
      "coords":[-122.678734, 45.516962],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Park Blocks",
      "description":"Clean bathroom for public use. Open 24/7",
      "coords":[-122.678734, 45.523578],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Park Blocks Downtown",
      "description":"Clean bathroom for public use. Open 24/7",
      "coords":[-122.682395, 45.516962],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Irving Park",
      "description":"Clean bathroom for public use. Open 24/7",
      "coords":[-122.656956, 45.546718],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Laurelhurst Park",
      "description":"Clean bathroom for public use. Open 24/7",
      "coords":[-122.628622, 45.520962],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Colonel Summers Park",
      "description":"Clean bathroom for public use. Open 24/7",
      "coords":[-122.647725, 45.515406],
      "createTime":"12-01-2017"
  },
  {
      "category":"bathroom",
      "name": "Public Bathroom in Downtown Park",
      "description":"Clean bathroom for public use. Open 24/7",
      "coords":[-122.679148, 45.512730],
      "createTime":"12-01-2017"
  },
  {
      "category":"shower",
      "name": "Public Shower",
      "description":"Mobile shower unit with free showers on Saturdays.",
      "coords":[-122.671156, 45.573333],
      "createTime":"12-01-2017"
  },
  {
      "category":"shower",
      "name": "Public Shower",
      "description":"Mobile shower unit with free showers on weekends.",
      "coords":[-122.672417, 45.524149],
      "createTime":"12-01-2017"
  },
  {
      "category":"shelter",
      "name": "Overnight Shelter",
      "description":"Shelter space with bathroom and showers, open to the public.",
      "coords":[-122.690385, 45.519323],
      "createTime":"12-01-2017"
  },
  {
      "category":"campsite",
      "name": "Hazelnut Grove Camping",
      "description":"Sanctioned urban camping with bathroom and storage for valuables.",
      "coords":[-122.679203, 45.545638],
      "createTime":"12-01-2017"
  },
  {
      "category":"campsite",
      "name": "Sidewalk Camping",
      "description":"Sidewalk space near hawthorne bridge with several spaces available for tents.",
      "coords":[-122.666347, 45.512753],
      "createTime":"12-01-2017"
  },
  {
      "category":"campsite",
      "name": "Sidewalk Camping",
      "description":"Large sidewalk with several spaces available for tents.",
      "coords":[-122.656500, 45.513986],
      "createTime":"12-01-2017"
  },
  {
      "category":"campsite",
      "name": "Sidewalk Camping",
      "description":"Large sidewalk with several spaces available for tents.",
      "coords":[-122.679561, 45.528081],
      "createTime":"12-01-2017"
  },
  {
      "category":"campsite",
      "name": "Safe Camping Near River",
      "description":"Sanctioned urban camping near the river with several spaces available for tents.",
      "coords":[-122.667326, 45.529290],
      "createTime":"12-01-2017"
  },
  {
      "category":"charging",
      "name": "Phone Charge Site",
      "description":"Public outlet station for charging devices.",
      "coords":[-122.654260, 45.518000],
      "createTime":"12-01-2017"
  },
]

// CREATE MAP
var lat = 45.5148906
var long = -122.6760716
var markers = []

var mymap = L.map('mapid').setView([lat, long], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/michellejl/cjapnyfhz54t92srsbcmaxlpv/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoibWljaGVsbGVqbCIsImEiOiJjamFwbjhiejkzeXZqMzFucWUxMmpoOW1iIn0.jy-E343ZsoMocqnEq_ovfA'
}).addTo(mymap);


// CREATING ICONS
var iconSize = 25;

var CustomIcon = L.Icon.extend({
  options: {
    iconSize:     [iconSize, iconSize],
    iconAnchor:   [iconSize, iconSize],
    popupAnchor:  [-(iconSize/2), -iconSize]
  }
});
var toiletIcon = new CustomIcon({iconUrl: 'img/blue-toilet.png'})
var showerIcon = new CustomIcon({iconUrl: 'img/bathroom.png'})
var sweepIcon = new CustomIcon({iconUrl: 'img/sweep.png'})
var shelterIcon = new CustomIcon({iconUrl: 'img/shelter.png'})
var campsiteIcon = new CustomIcon({iconUrl: 'img/campsite.png'})
var chargeStationIcon = new CustomIcon({iconUrl: 'img/charging.png'})

// PLACE NEW MARKER ON MAP
$('#add-marker').on('click', function(event) {
  event.preventDefault();

  iconType = getIconType();
  lat = $('#lat').val();
  long = $('#long').val();
  var marker = L.marker([lat,long], {icon: iconType})
  marker.addTo(mymap);

  markers.push(marker)
  popupText = createPopup();
  marker.bindPopup(popupText);

  resources.push(
    {
      "category":iconType,
      "name":$('#name').val(),
      "description": $('#description').val(),
      "coords":[lat, long],
      "createTime":"12-01-2017"
    }
  )
  // marker.openPopup();
})

function addResourceMarkers (arr) {
    for (var i = 0; i < arr.length; i++){
        addIndividualMarker(arr[i])
    }
};

function addIndividualMarker(item) {
    var obj = item;
    var lat = obj.coords[1];
    var long = obj.coords[0];
    var iconType = getIconType(obj.category);
    
    var marker = L.marker([lat,long], {icon: iconType});
    
    marker.addTo(mymap);
    markers.push(marker)
    var popupText = '<strong>' + obj.name + '</strong><br/>' + obj.description;
    marker.bindPopup(popupText);
}

addResourceMarkers(resources);

function createPopup() {
  var locName = $('#name').val();
  var desc = $('#description').val();
  var info = '';
  info += '<strong>' + locName + '</strong><br />';
  info += desc;
  return info;
}

function getIconType(type) {
  var icon = type ? type : $("select[name='category'] :selected").val();
  console.log(icon)
  switch (icon) {
    case 'bathroom':
      icon = toiletIcon;
      break;
    case 'shower':
      icon = showerIcon;
      break;
    case 'sweep':
      icon = sweepIcon;
      break;
    case 'shelter':
      icon = shelterIcon;
      break;
    case 'campsite':
      icon = campsiteIcon;
      break;
    case 'charging':
      icon = chargeStationIcon;
      break;
    default:
      icon = chargeStationIcon;
  }
  return icon;
}

var showSweepSite = function() {
    for (var i = 0; i < markers.length; i++){
        mymap.removeLayer(markers[i])
    }
    $('.list-view-container').hide();
    $('.map-view-container').show();
    
    var sweepSite =  {
        "category":"sweep",
        "name": "Burnside Bridge Camp Sweep",
        "description":"20 campers losing their tents and belongings, resources needed for these individuals.",
        "coords":[-122.670879, 45.523765],
        "createTime":"12-01-2017"
    };
    addIndividualMarker(sweepSite)
    displayEventsResources([sweepSite])
}


function onMapClick(e) {
  lat = e.latlng.lat;
  long = e.latlng.lng;
  $('#lat').val(lat);
  $('#long').val(long);
}

mymap.on('click', onMapClick);
