//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toUpperCase().trim();
    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(city == 'NEW YORK' || city == 'NYC' || city == 'NEW YORK CITY'){
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    if(city == 'SF' || city == 'SAN FRANCISCO' || city == 'BAY AREA'){
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    if(city == 'AUSTIN' || city == 'ATX'){
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    if(city == 'LOS ANGELES' || city == 'LA' || city == 'LAX'){
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    if(city == 'SYDNEY' || city == 'SYD'){
      $('body').attr('class','sydney');
    }
  });
});