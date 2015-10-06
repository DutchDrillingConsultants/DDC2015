'use strict';

ddc.component.Carousel = function(element){
	that = this;
	// add active class for hiding elements
	element.classList.add('active');
	this.slides = document.querySelectorAll('.carousel--slide-list--slide');
	this.index = 0;
	this.announceSlide = true;
	this.addControls(element);
	this.setSlides(this.index);
};

ddc.component.Carousel.prototype.addControls = function(element) {
	var ctrls = document.createElement('UL');
	ctrls.setAttribute('class', 'carousel--controls');

	ctrls.innerHTML = '<li>' +
    '<button type="button" class="carousel--btn-prev" aria-label="Previous">' +
    '</button>' +
  '</li>' +
  '<li>' +
    '<button type="button" class="carousel--btn-next" aria-label="Next">' +
    '</button>' +
  '</li>';

  ctrls.querySelector('.carousel--btn-next').addEventListener('click', function(){
  	that.announceSlide = true;
  	that.nextSlide();
	});

	ctrls.querySelector('.carousel--btn-prev').addEventListener('click', function(){
		that.announceSlide = true;
  	that.prevSlide();
	});

	// add controls to carousel
	element.appendChild(ctrls);
};

ddc.component.Carousel.prototype.prevSlide = function(){
	var length = this.slides.length,
    	new_current = this.index - 1;

    if(new_current < 0) {
      new_current = length-1;
    }

    this.setSlides(new_current);
};

ddc.component.Carousel.prototype.nextSlide = function(){
    var length = this.slides.length,
  			new_current = this.index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    this.setSlides(new_current);
};

ddc.component.Carousel.prototype.setSlides = function (new_current, setFocus) {
    setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
    this.slides[this.index].removeAttribute('aria-live');

    new_current = parseFloat(new_current);

    var length = this.slides.length,
    		new_next = new_current+1,
    		new_prev = new_current-1;

    if(new_next === length) {
      	new_next = 0;
    } else if(new_prev < 0) {
      new_prev = length-1;
    }

    for (var i = this.slides.length - 1; i >= 0; i--) {
      this.slides[i].classList.add('carousel--slide-list--slide');
    };

    this.slides[new_next].className = 'next carousel--slide-list--slide';
    this.slides[new_prev].className = 'prev carousel--slide-list--slide';
    this.slides[new_current].className = 'current carousel--slide-list--slide';

    if (this.announceSlide) {
      this.slides[new_current].setAttribute('aria-live', 'polite');
      announceSlide = false;
    }

    if (setFocus) {
      this.slides[new_current].setAttribute('tabindex', '-1');
      this.slides[new_current].focus();
    }

    this.index = new_current;
  }