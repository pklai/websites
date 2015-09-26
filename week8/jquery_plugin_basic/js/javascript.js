$(document).ready(table);

function table(){
	console.log('inside table');
	for(var counter=1; counter<3; counter++){
		console.log('inside loop');
		var li_string = '';
		li_string +='<li><<a href="images/';
		li_string += counter;
		li_string +='.jpg"><img src="thumbnails/thumb_';
		li_string += counter;
		li_string +='.jpg" alt="Image description" .../></a></li>';
		console.log(li_string);
		$('ul.photopile').append(li_string);
	}
	photopile.scatter();
}