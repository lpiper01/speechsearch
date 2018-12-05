window.SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    null;


// Initialize the recognizer object
var recognizer = new SpeechRecognition();
recognizer.continuous = true;

recognizer.addEventListener('result', function(event) {
	getResponse(event.results[i][0]);
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
