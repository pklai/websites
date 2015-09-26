//set up picture variable
var pictureImage = 'bronze';

//wait until page loaded
$(document).ready(one);

//run this when ready
function one(){
	$('button').click(mySwap);
}

//swap images when clicked
function mySwap(){
	//if picture image is bronze, change to silver
	if(pictureImage =='bronze'){
		$('#data').css('background-image','url(images/silver.jpg)');
		pictureImage = 'silver';
		return;
	}
  //if picture image is silver, change to gold
		if(pictureImage =='silver'){
		$('#data').css('background-image','url(images/gold.jpg)');
		pictureImage = 'gold';
		return;
	}

  //if picture image is gold, change to bronze
	if(pictureImage =='gold'){
		$('#data').css('background-image','url(images/bronze.jpg)');
		pictureImage = 'bronze';
		return;
	}

}