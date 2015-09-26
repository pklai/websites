var imageUsed = 'bronze';

$(document).ready(runWhenPageLoaded);

function runWhenPageLoaded(){
	$('button').click(runWhenClicked);
}

function runWhenClicked(){

	if(imageUsed == 'bronze'){
		$('#data').css('background-image', 'url(images/silver.jpg)');
		imageUsed = 'silver';
		console.log(imageUsed);
		return;
	}

	if(imageUsed == 'silver'){
		$('#data').css('background-image', 'url(images/gold.jpg)');
		imageUsed = 'gold';
		console.log(imageUsed);
		return;
	}

	if(imageUsed == 'gold'){
		$('#data').css('background-image', 'url(images/bronze.jpg)');
		imageUsed = 'bronze';
		console.log(imageUsed);
		return;
	}

}

// if an image tag, could do:
// $('img').attr("src", 'images/silver.jpg')