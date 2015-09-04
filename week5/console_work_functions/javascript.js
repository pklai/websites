//my favourite scoff
var myfoods = ['pizza', 'burger', 'cookies', 'mint ice cream', 'salad'];

$(document).ready(areWeReady)//this makes your code wait until the document has loaded

//$(document).ready( yourfunctionname );

function outputfood(){
	$('#output').append('<p>I Like ' + value + '</p>');
}

function entertag(){
$('h1').toggleClass('experimental');
$('#output').append();
}

function leavetag(){
	$('h1').toggleClass('experimental');
	$('#output').hide().append('leaving').fadein(500);
}

$('#output').mouseenter(entertag);

$('#output').mouseleave(leavetag);