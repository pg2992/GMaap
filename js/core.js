var GMaap = GMaap || {}

GMaap.Core = function(){
	var mapOptions = {
          center: new google.maps.LatLng(18.32, 73.52),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);   
               
        var marker = new google.maps.Marker({
			position: new google.maps.LatLng(18.32, 73.52),
			map: map,
			title: 'Vishrant Wadi'
		});
		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(18.02, 73.52),
			map: map,
			title: 'ASK'
		});
		
		google.maps.event.addListener(marker,"click",function(){
			console.log("marker clicked");
			})
    };
		
	



$(document).ready(function(){
		GMaap.Core();
//		google.maps.event.addDomListener(window, 'load', GMaap.Core());
	});
