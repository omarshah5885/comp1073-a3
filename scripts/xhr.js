// 
(function() {

    "use strict";

	// ------------------------------------------------------------------------------------------
	// ============================== READ MY COMMENTS ==========================================
	// ------------------------------------------------------------------------------------------
	
	var request = new XMLHttpRequest();
	request.open('GET', '../json.txt', true);
	request.send();
	console.log('step1');
	request.addEventListener('readystatechange', function() {
	// wait for response
		console.log('step2');
	if (request.readyState === 4) {
		console.log('step3');
	// declare general object about me which will gather json data 
	var omarInfo = {};
	
	// parse the json file into object
	omarInfo = JSON.parse(request.responseText);
	console.log(omarInfo);
	// declare array representing each key from object
	var index = [];
	var projects = [];
	var contact = [];
	
	// read in the string arrays from the object
	index = omarInfo.index_strings;
	projects = omarInfo.projects_strings;
	contact = omarInfo.contact_strings;
	
	// loop through each array 
	for(var number = 0; number<index.length; number++) {
		// create a reference to the DOM

		if (document.getElementById("aboutMe1")) { // checking DOM is there an aboutme1 element if it is, executes this part
			var aboutMe = document.getElementById( "aboutMe" + (number+1) );
			// set the innerHTML of the tags to the strings from the index array
			console.log("aboutMe");
			aboutMe.innerHTML = index[number];
		} 
		else if (document.getElementById("project1")) { // checking DOM is there an project1 element if it is, executes this part
			var project = document.getElementById("project" + (number+1));
			console.log(project);
			console.log(projects[number]);
			project.innerHTML = projects[number];
			console.log(project);
		}
		else { // if there is no aboutMe or project id that means we are in contact page and executes this part

			if (number === 2){ // this prevents connect3 from creation and cousing error because there is no  element had id with connect3.
				// Do nothing
			} else {
				var connect = document.getElementById("connect" + (number+1))
				console.log("Contact");
				connect.innerHTML = contact[number];
			}

		}
	}
	
	}
	} );

	// this part for submit button to work, I codiped this from app.js and I disabled app.js because this js does every job
	// that app.js supposed to do.

	if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == 'contact.html') {
		var submit = document.getElementById("submit");
		submit.addEventListener("click", function (event) {
			//input variables created in order to be displayed on console;
			var save_contact = document.getElementById("name");
			var save_contact2 = document.getElementById("email");
			var save_contact3 = document.getElementById("phone");
			var save_contact4 = document.getElementById("comment");

			console.log("Name: " + save_contact.value);
			console.log("Email: " + save_contact2.value);
			console.log("Phone: " + save_contact3.value);
			console.log("Comment: " + save_contact4.value);
			//test function to prevent submit button functionality
			event.preventDefault();
			// location.href = "index.html";
		} );
	} // end if 

})();