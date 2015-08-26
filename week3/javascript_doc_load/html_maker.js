function html_maker(javascript_no, paragraph_count){
	
	//starts a string
	var html_string = "";

	//adds the first bit of html and text
	html_string  += "<span>Running javascript";

	//adds the number of the script
	html_string += javascript_no + ".js: ";

	//checks if there are any <p> tags found
	if(paragraph_count == 0){
		html_string += "no paragraphs found!";
	}
	else{
		html_string += "counted ";
		html_string += paragraph_count
		html_string += ' paragraphs';
	}

	//closes html
	html_string += '</span>';

	//prints to console
	console.log(html_string);

	//appends html to #data tag
	$('#data').append(html_string);	
}
