'use strict';

project.component.Navigation = function(element){
	console.log(element);
	var frag = document.createDocumentFragment();
	var ol = document.createElement('ol');
	frag.appendChild(ol);
	for (var i=0; i<5; i++){
		var li = document.createElement('li');
		li.textContent = i;
		frag.appendChild(li);
	}
	element.appendChild(frag);
};