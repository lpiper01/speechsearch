
var database = "database.json"
var responses = null;

function populate(e) {
    var lines = e.target.result;
    responses = JSON.parse(lines);
    console.log(responses)
}

function loadDatabase() {
    var reader = new FileReader();
    reader.onload = populate;
    reader.readAsText(database)
}


function getResponse(str) {


}
