// 1. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 

// 2. On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let age = 35 ; // write variable name and values both 

// 3. Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x *= y
console.log(x)

// 4. Use comments to describe the correct data type of the following variables:

let length = 16; // number type ? 
let lastName = "Johnson"; // srting type ? 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object type ? 

// 5. Execute the function named myFunction.
 
function myFunction() {
    alert("Hello World!");
  }
  
  // call the function and see the output 
  myFunction()
  
  // 6. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

let personName = "John";
let personAge = 50;

let message = personName + " is " + personAge;

alert(message);

// // 8. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];

alert(cars.length)




// 8. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

    Brand.shift("Volvo")
    Brand.unshift("Ford")

    console.log(Brand)



// 9. Use the correct Math method to create a random number.

let random = Math.random();
console.log(random)

// 9. Use the correct Math method to return the largest number of 10 and 20.

let largeNumber = Math.max(10, 20);
console.log(largeNumber)

// 9. Use the correct Math method to get the square root of 9.


let squre = Math.sqrt(9);

console.log(squre)

// // 10. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

if (x > y) {
    
    alert(true) 

}

// 10. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 18;
let message = age > 18 ? "Too young" : "Old enough"

console.log(message)


