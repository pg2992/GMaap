var GMaap = GMaap || {}

GMaap.Core = function(){
	var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
    };
		
	



$(document).ready(function(){
		GMaap.Core();
//		google.maps.event.addDomListener(window, 'load', GMaap.Core());
	});
