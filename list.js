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
      "coords":[-122.670879, 45.523765],
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
      "coords":[-122.671156, 45.523333],
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


var displayEventsResources = function(arr) {
    var listings = $(".list ul");
    listings.empty();
    for (var i = 0; i < arr.length; i++){
        var obj = arr[i]; 
        var type = obj.category
        var name = obj.name
        var details = obj.description
        var date = obj.createTime
        var image = 'img/++'
        var resource = '<li><img src='+image+' width="75" height="70" alt=""><p>Type: '+type+'<br>Name: '+name+'<br>Details: '+details+'<br>Date submitted: '+date+'</p></li><hr>'
        listings.append(resource);
    }
}

var createGeoJsonFeature = function(obj) {
    var geojsonFeature = {
        "type": "Feature",
        "properties": {
            "name": obj.name,
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [obj.cords[0], obj.cords[1]]
        }
    }
    return geojsonFeature
}

var search = function() {
    var bathrooms = [
        {
            "category":"bathroom", 
            "name": "Public Bathroom in Overlook Park.",
            "description":"Clean bathroom for public use. Open from 6am-9pm.",
            "coords":[-122.678734, 45.516962],
            "createTime":"12-01-2017"
        },
        {
            "category":"bathroom", 
            "name": "Public Bathroom in Overlook Park.",
            "description":"Clean bathroom for public use. Open from 6am-9pm.",
            "coords":[-122.678734, 45.516962],
            "createTime":"12-01-2017"
        }
    ]
    displayEventsResources(bathrooms);
}

var hideMapView = function() {
    $('.list-view-container').show();
    $('.map-view-container').hide();
};

var hideListView = function() {
    $('.list-view-container').hide();
    $('.map-view-container').show();
};

var showform = function() {
    // show form
    $('.add-listing-form').toggle();

    // jump to bottom of page to show entire form
    $('html, body').scrollTop( $(document).height() );
};

var submitListing = function() {

};

$('.add-listing-form').submit(function(e) {
    var $inputs = $('.add-listing-form :input');

    var category = $inputs[0].value;
    var name = $inputs[1].value;
    var description = $inputs[2].value;
    var location = $inputs[3].value;

    resources.push({
        "category": category, 
        "name": name,
        "description": description,
        "coords":[-122.672525, 45.509209],
        "createTime": Date.now()
    })
    displayEventsResources(resources);
    $('.add-listing-form').empty();
    $('html, body').scrollTop( $(document).height() );
    return false;
});

// display all resources in list on load
displayEventsResources(resources)

