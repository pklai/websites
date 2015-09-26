//wait for the page to load in memory/the DOM to be built before
// running function that attaches click listener
$(document).ready(runWhenReady);

//function that:
// attaches click listener to submit-btn
// that will trigger another function on clicked
function runWhenReady(){
	console.log('inside runWhenReady');
	$('#submit-btn').click(grabTheCity);
	console.log('leaving runWhenReady');
}

// at this point the page is ready and primed, so it stops and waits for the user to do something.

//when submit-btn is clicked, function that:
function grabTheCity(){
	console.log('inside grabTheCity');
	// prevents the default behavior of form (ie to try and connect to a server)
	event.preventDefault();
	// grabs the city name value from the city-type input field and puts it in a variable
	var cityName = $('#city-type').val();
	// makes it uppercase, 
	cityName = cityName.toUpperCase();
	// trims any spaces, 
	cityName = cityName.trim();
	console.log('\t processed city name:' + cityName);
	// hands it to another function to switch city picture
	switchCity(cityName);
	console.log('leaving grabTheCity');
}

  //function that: switches city picture
  function switchCity(cityName){
  	console.log('inside switchCity');
  	console.log('\t incoming variable cityname: ' + cityName + ", type of: " + typeof cityName);
  	// if city equals New York City or NYC or New York
  	if(cityName == 'NEW YORK' || cityName == 'NYC' || cityName == 'NEW YORK CITY'){
  		console.log('\t inside new york if-statement');
		//    switch class attribute of body to nyc
		$('body').attr('class', 'nyc');
		console.log('\t leaving new york if-statement');
	}

	  // if city equals SF or San Francisco or Bay Area
	  if(cityName == 'SF' || cityName == 'SAN FRANCISCO' || cityName == 'BAY AREA'){
	  	console.log('\t inside San Francisco if-statement');
		//    switch class attribute of body to sf
		$('body').attr('class', 'sf');
		console.log('\t leaving San Francisco if-statement');
	}

	  // if city equals Austin or ATX
	  if(cityName == 'AUSTIN' || cityName == 'ATX'){
	  	console.log('\t inside Austin if-statement');
		//    switch class attribute of body to austin
		$('body').attr('class', 'austin');
		console.log('\t leaving Austin if-statement');
	}

	  // if city equals Los Angeles or LA or LAX
	  if(cityName == 'LOS ANGELES' || cityName == 'LA' || cityName == 'LAX'){
	  	console.log('\t inside LA if-statement');
		//    switch class attribute of body to la
		$('body').attr('class', 'la')
		console.log('\t leaving LA if-statement');
	}

	  // if city equals Sydney or SYD
	  if(cityName == 'SYDNEY' || cityName == 'SYD'){
	  	console.log('\t inside Sydney if-statement');
		//    switch class attribute of body to sydney
		$('body').attr('class', 'sydney');
		console.log('\t leaving Sydney if-statement');
	}
	console.log('leaving switchCity');
}
