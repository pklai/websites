$(document).ready(doSetup);

function doSetup(){
	$('.readmore').click(doReadMore);
	$('.readless').click(doReadLess);
	$('.learnmore').click(doLearnMore);
}

$('.readmore').click(doReadMore);

function doReadMore(){
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();
}

$('.readless').click(doReadLess);

function doReadLess(){
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readmore').show();
	$('.readless').hide();
}

$('.learnmore').click(doLearnMore);

function doLearnMore(){
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
}