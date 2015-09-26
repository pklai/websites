var runningTotal=0;

var badgeImage = 'blank'

//we want to wait for the document to load then run runAPPApp
$(document).ready(runAPPApp);


function runAPPApp(){
  //attach two click listeners
  //click listener one attaches to nameEnter and runs enterCustomerName
  //click listener two attaches to unitPriceEnter and runs addTheNumbers
}

  // _______________________ above this loads, below this waits___________________
  function enterCustomerName(){
	//check customer name for text only
	//pop up error message if non-alphabetical letters
	//delete extra spaces
	//change customer name to lower case
	//grab the value of the customerName then puts it back into the textbox
}
function addingTheNumbers(){
	//check for numbers only
	//pop up error message if non-numerical
	//delete extra spaces
	//check number greater than zero
	//pop up error if not
	//round to nearest cent, ie. two demical places
	//display number on ordered list
	//add to runningTotal
	//display runningTotal in #total
	//if amount less than or equal to 99.99, show bronze image
	//if amount is in range of 100 to 199.99, show silver image
  //if amount is above 200, show gold image
  //loop
}

