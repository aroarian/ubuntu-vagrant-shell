// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments
var index = process.argv;
// console.log(process.argv);

var city = index[2];
var state = index[3];

var geocoder = require('geocoder');

geocoder.geocode(`${city}, ${state}`, function ( err, data ) {
    if (err){
        console.log("error");
    }
    console.log(JSON.stringify(data, null, ' '));
  });

// Build your address as an array or string


// Then use Geocoder NPM to geocode the address
