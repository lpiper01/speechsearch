window.SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    null;


// Initialize the recognizer object
var recognizer = new SpeechRecognition();
recognizer.continuous = true;



recognizer.addEventListener('result', function(event) {
    var result;
    for (var i = event.resultIndex; i <  event.results.length; i++) {
	// Each specific event is a separate string in here; it does not divide up by words.
	console.log(event.results[i][0].transcript);
	result = event.results[i][0].transcript.split(" ");
	console.log(result);
	getResponse(event.results[i][0]);
    }

});

// Starts the recording when the play button is clicked
document.getElementById('button-play').addEventListener('click', function() {
    recognizer.interimResults = false;
    try {
	recognizer.start();
	console.log("STARTED");
    } catch(ex) {
	console.log("Error");
    }
});

// ends recording when the stop button is clicked
document.getElementById('button-stop').addEventListener('click', function() {
    recognizer.stop();
    console.log('Stopped');
});

getResponse("jovial");
