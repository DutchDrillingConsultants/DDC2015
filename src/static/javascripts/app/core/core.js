'use strict';

var project = {
	element: {},
	component: {},
	api: {
			observer : new MutationObserver(function (mutations) {
			  // Whether you iterate over mutations..
			    mutations.forEach(function (mutation) {
			      // or use all mutation records is entirely up to you
			      var entry = {
			        mutation: mutation,
			        el: mutation.target,
			        value: mutation.target.textContent,
			        oldValue: mutation.oldValue
			      };
			      console.log('component changed:', entry);
			    });
				})
	},
	debug: {}
};