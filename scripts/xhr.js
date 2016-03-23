// 
(function() {

    "use strict";

	var request = new XMLHttpRequest();
	request.open('GET', '../json.txt', true);
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
	for(var number=0; number<index.length; number++) {
		// create a reference to the DOM
		var aboutMe = document.getElementById( "aboutMe" + (number+1) );
		// set the innerHTML of the tags to the strings from the index array
		aboutMe.innerHTML = index[number];
		
		var project = document.getElementById("project" + (number+1));
		project.innherHTML = project[number];
		
		var connect = document.getElementById("connect" + (number+1));
		connect.innerHTML = contact[number];
	}
	
	}
	} );

})();