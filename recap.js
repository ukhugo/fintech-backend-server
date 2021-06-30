// var x = 12;

// x = "Dixant";

// int x = 12;

// x = "Dixant";

// console.log ("My Message");

// console.log(x);

// console.log(`Value of x: ${x}`);

//let x = 12;
//let y = 3;

//console.log(
//    "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
//    +(x / y)
//  );

//console.log(
//    "Value of x : " + x + ", Value of y: " + y + ", and " + x + "/" + y + "=", + (x/y)
//);

//console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`);
//;


//  conditional statements

// let age = 10;
// if (age > 18) {
//    console.log("You can vote!");
//} else {
//    console.log ("You are too young to vote");
//}


///next lessom

// function print_sum (a,b) {
// console.log(`a:${a}`);
// console.log(`b: ${b}`);
// console.log (`a + b = ${a + b}`);

// }
// print_sum (2,3);



//  you can define function without a name

//function (a,b){
//    console.log("a+b = " + (a+b));
//}


var function_to_print_sum = function (a,b){
    console.log("a + b = " + (a+b));
}

console.log(function_to_print_sum(2,5));

//  arrow sign to replace the word 'function'

var function_to_print_sum = (a,b) => {
    console.log("a + b = " + (a+b));
}

function_to_print_sum(4,4);

//  in js, you can pass parameters as functions - callback function
function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }

  print_after_operation (3, 4, add);
  print_after_operation (3, 4, product);
  print_after_operation (3, 4, (a,b) => {return a-b});

