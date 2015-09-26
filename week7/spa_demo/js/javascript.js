$(document).ready(shimano);

function shimano(){
	$('#page1').click(doPage1);
	$('#page2').click(doPage2);
	$('#page3').click(doPage3);
	$('#page4').click(doPage4);
}

function doPage1(){
	$('div').hide();
	$('#divPage1').show();
}

function doPage2(){
	$('div').hide();
	$('#divPage2').show();
}

function doPage3(){
	$('div').hide();
	$('#divPage3').show();
}

function doPage4(){
	$('div').hide();
	$('#divPage4').show();
}