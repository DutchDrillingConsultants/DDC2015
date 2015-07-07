'use strict';

project.initializeComponents = function(){
	var components = document.querySelectorAll('[data-constructor]');	
	var len = components.length;
	for (var i = 0; i < len; i++){
		var item = components[i];
		var itemData = item.getAttribute('data-constructor');
		if(!item.getAttribute('data-instantiated')) {
				new project.component[itemData](item);
				item.setAttribute('data-instantiated', true);
					
			}
		}
};

$(function(){
     /* domready */
    project.initializeComponents();
});