var fs = require('fs');
var index = process.argv;

fs.readFile('bank.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    var dataArr = data.split(",");
    var total = 0;

 if (index[2] == "total"){
    
    for (var i = 0; i < dataArr.length; i++){
        
        total = (parseInt(total) + parseFloat(dataArr[i]));
        
    };
    console.log(total);
 };
 
   
  });

  
  