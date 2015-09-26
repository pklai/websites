$(document).ready(doMyLaundry);

function doMyLaundry(){
	$('#submit-btn').click(two);
}

function two(){
	event.preventDefault(); //this prevents its default action
	var myValue = $('#formField').val();
	buildMyTag(myValue);
}

function buildMyTag(txt){
	var myTag='';
	myTag += '<p>';
	myTag += txt;
	myTag += '</p>';
	$('#output').append(myTag);
	console.log(myTag);
}