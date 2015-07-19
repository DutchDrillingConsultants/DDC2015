'use strict';

ddc.component.OffCanvas = function(element) { 
	var toggleEl = document.querySelector('.toggle-nav'),
	toggleNav = function toggleNav() {
		if (element) {
			element.classList.toggle('show-nav');

			if (toggleEl.innerHTML === 'Show menu') {
				toggleEl.innerHTML = 'Hide menu';
			} 
			else {
				toggleEl.innerHTML = 'Show menu';
			}
		}
	};
	toggleEl.addEventListener('click', toggleNav, 'false');
};