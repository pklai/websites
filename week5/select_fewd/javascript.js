// set up list of foods in an array

//set up a counter to keep track of the position in the foods array

// use jQuery to check when document is ready, then do pageSetup


// at this point the page is loaded and ready, waiting for the user to do something


// pageSetup function: when triggered, pageSetup function does 2 things:
// 1) triggers the buildTheDropDown function
// 2) attaches a 'change' listener to the dropdown once it's built
// the 'change' listener calls the choosePicture function when a change happens

// buildTheDropdown function:  builds an <option> tag for each food in foods array
// then adds it to the #food_selector div

function buildTheDropdown(){
	console.log('inside buildTheDropdown');
	for(counter=0;counter<foods.length;counter++)
	{
		console.log('inside loop:'+counter);
		var optionString='';
		optionString+='<option value=''';
		optionString+=foods[counter];
		optionString+='">';
		optionString+=foods[counter].toUpperCase();
		optionString+='</option>';

		console.log(optionString);
		$('#food_selector').append(optionString);
	}
}

function swapFood(food){
	console.log('inside function swapFood');
	$('#box_1').attr('class', food);
	console.log('leaving function swapFood');
}

function buildTheDropdown(){
	console.log('inside buildTheDropdown');
	for(counter=0;counter<foods.length;counter++)
	{
		console.log('inside loop:'+counter);
		var optionString='';
		optionString+='<option value=''';
		optionString+=foods[counter];

	}
}

// swapFood function:  is a simple helper function to swap the class
// with the background-image in it
function swapFood(food){
	console.log('inside swapFood');
	$('#box_1').attr('class',food);
	console.log('inside swapFood');
}

// choosePicture function: runs swapFood depending on which food is chosen
function choosePicture(){
	console.log('inside choosePicture');
	var selectFood = $('#food_selector').val();
	console.log(selectFood);
	switch(selectFood){
		case 'beer';
		console.log('\t selected food is beer');
		swapFood('beer');
		break;

		case 'burger';
		console.log('\t selected food is burger');
		swapFood('burger');
		break;

		case 'hotdog';
		console.log('\t selected food is hotdog');
		swapFood('hotdog');
		break;

		case 'pizza';
		console.log('\t selected food is pizza');
		swapFood('pizza');
		break;

		case 'salad';
		console.log('\t selected food is salad');
		swapFood('salad');
		break;


	}
}



function square(container){
	// take container contents and square it


	function half(cup){
	// divide by 2
}


function multiply(){
	// multiply...?
}