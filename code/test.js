// console.log(process.argv);

var index = process.argv;

var num1 = parseInt(index[3]);
var num2 = parseInt(index[4]);
var operator = index[2];

if (operator == "add"){
    console.log(num1 + num2);
}

else if (operator == "subtract"){
    console.log(num1 - num2);
}

else if (operator == "multiply"){
    console.log(num1 * num2);
}

else if (operator == "divide"){
    console.log(num1 / num2);
}

else if (operator == "remainder"){
    console.log(num1 % num2);
}





