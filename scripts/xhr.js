// 
(function() {

    "use strict";

	var request = new XMLHttpRequest();
	request.open('GET', 'Comp1073/a3/json.txt', true);
	request.send();
	request.addEventListener('readystatechange', function() {
	// wait for response 
	if (request.readyState === 4) {
	
	// declare general object about me which will gather json data 
	var omarInfo = {};
	
	// parse the json file into object
	omarInfo = JSON.parse(request.responseText);
	
	// declare array representing each key from object
	var index = [];
	var projects = [];
	var contact = [];
	
	// read in the string arrays from the object
	index = omarInfo.index_strings;
	projects = omarInfo.projects_strings;
	contact = omarInfo.contact_strings;
	
	// loop through each array 
	
	}
	} );

})();