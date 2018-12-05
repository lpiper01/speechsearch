var define_words = ["define", "mean", "definition", "meaning"];
var question_words = ["what", "who", "when", "where", "why", "how"];

function getResponse(str) {
    var term = str.toLowerCase();
    console.log(database[str]);
}




function determineType(str) {
    var define = 0;
    var question = 0;

    for (var word of define_words) {
	if (str.indexOf(word) !== -1) {
	    define++;
	}
    }

    for (var word of question_words) {
	if (str.indexOf(word) !== -1) {
	    question++;
	}
    }


}
