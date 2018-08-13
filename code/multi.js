var index = process.argv;
console.log(process.argv);

var num1 = index[2];
var num2 = index[3];


// if (num1 == num2){
//     console.log(true);
// }
// else{
//     console.log(false);
//     console.log(num1)
//     console.log(num2)
// }

var firstNum = num1 % 7;
var secondNum = num2 % 7;

if (firstNum === 0 && secondNum === 0 ){
    console.log("These numbers are multiples of 7");
}
else{
    console.log(false);
}


