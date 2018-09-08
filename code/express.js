var http = require("http");

var port = 7500;

function handleRequest (request, response){

    response.end("Wow.......you suck.");
}


var server = http.createServer(handleRequest);


server.listen(port, function(){

    console.log("Server listening on: http://localhost:" + port);
   
});