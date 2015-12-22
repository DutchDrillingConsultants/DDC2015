'use strict';

ddc.api.store = {
	elm : []
};

ddc.component.GoogleMap = function(element) {
	var obj = {};

	if (element) {		
		obj.id = element.getAttribute('id');
		obj.lat = Number(element.getAttribute('data-lat'));
		obj.lon = Number(element.getAttribute('data-lon'));
		obj.title = element.getAttribute('data-title');
		ddc.api.store.elm.push(obj);
	}
	
	if (typeof google === 'object' && typeof google.maps === 'object') {
		for (var i = 0; i < ddc.api.store.elm.length; i++) {
			 	map = new google.maps.Map(document.getElementById(ddc.api.store.elm[i].id), {
		    center: {lat: ddc.api.store.elm[i].lat, lng: ddc.api.store.elm[i].lon},
		    zoom: 17,
		    mapTypeId: google.maps.MapTypeId.MAP,
		    heading: 90,
		    tilt: 45
		  });
			 		marker = new google.maps.Marker({
					position: {lat: ddc.api.store.elm[i].lat, lng: ddc.api.store.elm[i].lon},
					map: map,
					title: ddc.api.store.elm[i].title
		});
		}
	}
};