var request = require("request");


module.exports={
    show: function searchShow(title){
        if (title){
            title = title
        }
        
        else {
            title = "The Simpsons";
        }
    
        
        request(`http://api.tvmaze.com/search/shows?q=${title}`, function(error, response, data){
        if (error) {
            return console.log('Error occurred: ' + error);
          }
          console.log("Show Name: " + JSON.parse(data)[0].show.name);
          console.log("Genre(s): " + JSON.parse(data)[0].show.genres);
          console.log("Rating: " + JSON.parse(data)[0].show.rating.average);
          console.log("Network: " + JSON.parse(data)[0].show.network.name);
          var sum = JSON.parse(data)[0].show.summary;
          var summarySplit = sum.split("</b>")
          var splitFinal = summarySplit[1].split("</p>")
          console.log("Summary: " + splitFinal[0]);
          
    });
    }
};


//name

//genre

//rating

//network