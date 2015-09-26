$(document).ready(startMeUp);

function startMeUp(){
	console.log('inside startMeUp');
	$('#page1').click(page1);
	$('#page2').click(page2);
	$('#page3').click(page3);
	$('#page4').click(page4);
	console.log('leaving startMeUp');
}

function page1(){
	console.log('inside page1');
	$('div').hide();
	$('#divPage1').show();
}

function page2(){
	console.log('inside page2');
	$('div').hide();
	$('#divPage2').show();
}

function page3(){
	console.log('inside page3');
	$('div').hide();
	$('#divPage3').show();
}

function page4(){
	console.log('inside page4');
	$('div').hide();
	$('#divPage4').show();
}