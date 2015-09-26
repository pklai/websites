// set up list of foods in an array
var foods =["beer", "burger", "salad", "hotdog", "pizza"];
console.table(foods);
//set up a counter to keep track of the position in the foods array
var counter;
// use jQuery to check when document is ready, then do pageSetup
$(document).ready(pageSetup);

// at this point the page is loaded and ready, waiting for the user to do something
// 1) triggers the buildTheDropDown function
// 2) attaches a 'change' listener to the dropdown once it's built
// the 'change' listener calls the choosePicture function when a change happens


function pageSetup(){
		console.log("inside function pageSetup");
		buildTheDropdown();
		$("#food_selector").change(choosePicture);
}
// pageSetup function: when triggered, pageSetup function does 2 things:

function choosePicture(){
	console.log("inside function choosePicture");
	var selectedFood=$("#food_selector").val();
	console.log("selected" + selectedFood);
	switch(selectedFood){
		case "beer":
		console.log("selected case is beer");
		swapFood("beer");
		break;

		case "burger":
		console.log("selected case is burger");
		swapFood("burger");
		break;

		case "hotdog":
		console.log("selected case is hotdog");
		swapFood("hotdog");
		break;

		case "pizza":
		console.log("selected case is pizza");
		swapFood("pizza");
		break;

		case "salad":
		console.log("selected case is salad");
		swapFood("salad");
		break;
	}
}
// buildTheDropdown function:  builds an <option> tag for each food in foods array

function buildTheDropdown(){
		console.log("inside function buildTheDropdown");
		for(
			counter=0;//set counter to zero
			counter < foods.length; //check counter is less than number of foods
			counter++ )//NO SEMI COLON. Repeat and add 1 each time
		{console.log(foods[counter]);

			var optionString="";
			optionString +='<option value="';
			optionString += foods[counter];
			optionString += '">';
			optionString += foods[counter].toUpperCase();
			optionString+= "</option>";

			console.log(optionString);

// then adds it to the #food_selector div

			$("#food_selector").append(optionString);
}
}
// swapFood function:  is a simple helper function to swap the class
function swapFood(food){
	console.log("inside function swapFood");
	$("#box_1").attr("class",food);
}


// with the background-image in it

// choosePicture function: runs swapFood depending on which food is chosen
