var request = require("request");

module.exports={
    actor: function searchActor(actor){
        if (actor){
            actor = actor
        }
        
        else {
            actor = "Brad Pitt";
        }
    
        request(`http://api.tvmaze.com/search/people?q=${actor}`, function(error, response, data){
        if (error) {
            return console.log('Error occurred: ' + error);
          }
         
          console.log("Name: " + JSON.parse(data)[0].person.name);
          console.log("Birthday: " + JSON.parse(data)[0].person.birthday);
          console.log("Gender? " + JSON.parse(data)[0].person.gender);
          console.log("Country: " + JSON.parse(data)[0].person.country.name);
          console.log("TV Maze URL: " + JSON.parse(data)[0].person.url);

    });
    }
};

//name

//birthday

//gender

//country