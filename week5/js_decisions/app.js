$(document).ready(runMyStuff);

function runMyStuff(){
	$('#submit').click(getFormInfo);
}

function getFormInfo(){
	event.preventDefault();
	var food = $('input[name=food]:checked').val();
	var music = $('input[name=music]:checked').val();
	var hobby = $('input[name=hobby]:checked').val();
	processResults(food, music, hobby);
}

function processResults(f, m, h){
	if(f== 'salad' || m =='nvm' || h =='misc'){
		$('#output').append(' great pizza/Van guy');

	}

	else{
		$('#output').append(' WHAT? Get some pizza and stop listening to one direction!');
	}

}

