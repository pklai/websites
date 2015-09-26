$(document).ready(setUpPage);

function setUpPage(){
	$('header nav ul li:first-child').click(menuAppear);
}

function menuAppear(){
	$(this).parent().toggleClass('slideDown');
}
