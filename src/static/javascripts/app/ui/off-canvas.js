'use strict';

project.component.OffCanvas = function(element) { 
	var toggleEl = document.querySelector('.toggle-nav'),
	toggleNav = function toggleNav() {
		if (element) {
			element.classList.toggle('show-nav');
		}
	}
	toggleEl.addEventListener('click', toggleNav, 'false');
};