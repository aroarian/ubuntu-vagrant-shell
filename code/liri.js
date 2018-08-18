require("dotenv").config();
var keys = require("./keys")
var request = require("request");
var Spotify = require("node-spotify-api");
var Bands = require("bandsintown-events")

var spotify = new Spotify(keys.spotify);
var bands = new Bands(keys.bandsIn);

var command = process.argv[2];
var input = process.argv[3]


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

function concertThis(artist){
    if (artist){
        artist = artist
    }
    
    else {
        artist = "Eagles";
    }

    request(`https://rest.bandsintown.com/artists/${artist}/events?app_id=${bands}`, function(error, response, data){
        if (error) {
            return console.log('Error occurred: ' + error);
          }
          console.log(data);
    })
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
  console.log("");
  console.log(data.tracks.items[0].artists[0].name); 
  console.log("");
  console.log(data.tracks.items[0].name);
  console.log("");
  console.log(data.tracks.items[0].external_urls.spotify);
  console.log("");
  console.log(data.tracks.items[0].album.name);
  console.log("");
  console.log("--------------------------------")
  });
}

function movieThis(movie){
    if (movie){
        movie = movie
    }
    
    else {
        movie = "Mr. Nobody";
    }

    request(`http://www.omdbapi.com/?apikey=c5a8df09&t=${movie}`, function(error, response, data){
        if (error) {
            return console.log('Error occurred: ' + error);
          }

        console.log("--------------------------------")
        console.log("");
        console.log(JSON.parse(data).Title);
        console.log("");
        console.log(JSON.parse(data).Year);
        console.log("");
        console.log(JSON.parse(data).imdbRating);
        console.log("");
        console.log(JSON.parse(data).Ratings[1].Value);
        console.log("");
        console.log(JSON.parse(data).Country);
        console.log("");
        console.log(JSON.parse(data).Language);
        console.log("");
        console.log(JSON.parse(data).Plot);
        console.log("");
        console.log(JSON.parse(data).Actors);
        console.log("");
        console.log("--------------------------------")
    })
    
    
}

function doThis(){
    console.log("do what is working");
}







// concert-this
// spotify-this-song
// movie-this
// do-what-it-says