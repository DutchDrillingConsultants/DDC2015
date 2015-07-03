'use strict';

project.initializeComponents = function(){
	var components = document.querySelectorAll('[data-constructor]');	
	var len = components.length;
	for (var i = 0; i < len; i++){
		var item = components[i];
		var itemData = components[i].dataset;
		if(!itemData.intantiated){
			if(project.component[itemData.constructor] !== undefined){
				new project.component[itemData.constructor](item);
					itemData.instantiated = true;
					project.api.observer.observe(item, {
					  	attributes:true,
					  	childList:true,
					  	characterData:true,
					  	characterDataOldValue:true,
					  	subtree:true
			  });
			}
		}
	}
	// Object.keys(components).forEach(function(key) {
 //    	console.log(key);}
	// );
	
};

$(function(){
     /* domready */
    project.initializeComponents();
});