function getResponse(str)
{
    var elems = str.toLowerCase().split(" ")
    var query = [];

    var first = 0;
    var last = elems.length;
    for (var i = first; i < last && i !== -1; i++) {
	query.push(elems[i]);
    }

    // Create compound words to search for
    var compound = [];
    for (var j = 0; j < query.length; j++) {
	for (var k = 0; k < query.length; k++) {
	    compound.push(query[j] + " " + query[k]);
	}
    }

    query = query.concat(compound);

    console.log(query);

    document.getElementById('query').innerHTML += "<br>";
    for (var i = 0; i < elems.length; i++) {
	document.getElementById('query').innerHTML +=  elems[i] + " ";
    }
    document.getElementById('query').innerHTML +=  "</br>";

    // Search dictionary for all words
    for (var i = 0; i < query.length; i++) {
	var word = query[i];
	response = database[word] || null;
	if (response) {
	    document.getElementById('response').innerHTML += "<br>" + word + ": " + response + "</br>";
	}
    }
}
