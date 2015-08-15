'use strict';

ddc.component.Navigation = function(element){

	var navEls = document.querySelectorAll('.main-navigation__first', element),
		length = navEls.length,
		mql = window.matchMedia('screen and (min-width: 40em)');

	if ('ontouchstart' in document.documentElement && mql.matches) {
		for (var i = 0; i < length; i++) {
			(function (index) {
				navEls[index].addEventListener('touchend', function(e) {
					
					/* prevent delay and simulated mouse events */
					e.preventDefault();
					/* trigger the actual behavior we bound to the 'click' event */
					e.target.click();
				});

				navEls[index].addEventListener('click', function() {		
					var el = document.querySelector('.show-sub');			
						if(el) {							
							el.classList.remove('show-sub');	
							this.classList.add('show-sub');						
						}
						else {
							this.classList.add('show-sub');
						}
					});
			})(i);
		}

		document.addEventListener('click', function(e) {
			var el;
			if (e.target.className !== 'main-navigation__first show-sub') {
					el = document.querySelector('.show-sub');
						if (el) {
							el.classList.remove('show-sub');
						}
			}
		});
	}
};