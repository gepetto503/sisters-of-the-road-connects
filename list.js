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
        "name": "Portable Showers",
        "description":"Mobile shower unit with free showers on Saturdays.",
        "coords":[-122.672525, 45.509209],
        "createTime":"12-01-2017"
    },
    {
        "category":"bathroom", 
        "name": "Public Bathroom in Overlook Park.",
        "description":"Clean bathroom for public use. Open from 6am-9pm.",
        "coords":[-122.678734, 45.516962],
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
        var resource = '<li><img src="mockmap1.png" width="75" height="70" alt=""><p>Type: '+type+'<br>Name: '+name+'<br>Details: '+details+'<br>Date submitted: '+date+'</p></li><hr>'
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

