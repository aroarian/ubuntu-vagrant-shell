// console.log("works");
require("dotenv").config();
var keys = require("./keys")
var request = require("request");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv[3]
// console.log(command);
// console.log(keys);

if (command === "concert-this"){
    concertThis();
}

else if (command === "spotify-this-song"){
    spotifyThis(input);
}

else if (command === "movie-this"){
    movieThis(input);
}

else if (command === "do-what-it-says"){
    doThis();
}

else {
    console.log("command unknown");
}

function concertThis(){
    console.log("concert is running");
}

function spotifyThis(query){
    if (query){
        query = query
    }else {
        query = "All the small things";
    }
//  Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
   spotify.search({ type: 'track', query: query }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  

  //console.log(data.tracks.items[0]); 
  console.log("--------------------------------")
  console.log(data.tracks.items[0].artists[0].name); 
  console.log("");
  console.log(data.tracks.items[0].name);
  console.log("");
  console.log(data.tracks.items[0].external_urls.spotify);
  console.log("");
  console.log(data.tracks.items[0].album.name);
  console.log("--------------------------------")
  });
}

function movieThis(movie){
    if (movie){
        movie = movie
    }else {
        movie = "Mr. Nobody";
    }
    request(`http://www.omdbapi.com/?apikey=c5a8df09&t=${movie}`, function(error, response, data){

        console.log(JSON.parse(data).Title);
    })

    
}

function doThis(){
    console.log("do what is working");
}







// concert-this
// spotify-this-song
// movie-this
// do-what-it-says