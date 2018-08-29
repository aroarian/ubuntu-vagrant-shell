var mysql = require("mysql");
var inquirer = require('inquirer');

// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "7654321z",
//   database: "playlistDB"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   if (process.argv[2] == "insert"){
//     createQuery();
//     console.log("working")
//   }
//   // queryAllSongs();
//   // queryDanceSongs();


// // function queryAllSongs() {
// //   connection.query("SELECT * FROM songs", function(err, res) {
// //     for (var i = 0; i < res.length; i++) {
// //       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
// //     }
// //     console.log("-----------------------------------");
// //   });
// // }

// function queryDanceSongs() {
//   connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });

//   function createQuery(){
//    connection.query(`INSERT INTO songs (title, artist, genre) VALUE(${process.argv[3]},${process.argv[4]},${process.argv[5]})` ,function(err, res){
//      console.log("added");
//    });
//   };

//   // logs the actual query being run
//   //console.log(query.sql);

// });


inquirer
  .prompt([
    {
    type: "list",
    name: "choice",
    choices: [ "POST AN ITEM", "BID ON AN ITEM" ]
    }])
  .then(answers => {

    if (answers.choice === "POST AN ITEM"){
      inquirer
  .prompt([
    {
      type: "input",
      name: "type",
      message: "Type of Item: "
    },
    {
      type: "input",
      name: "bid",
      message: "Item starting bid: "
    },
    {
      type: "input",
      name: "description",
      message: "Description: "
    }
  ])
  .then(answers => {
    console.log(answers);
  });
     // console.log("POST");
    }
    
    if (answers.choice === "BID ON AN ITEM"){
      console.log("BID");
    }
  });