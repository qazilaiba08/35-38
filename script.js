// 1. Write a function that displays current date & time in your
// browser.

function currentDate(){
    let date = new Date();
    document.write(date + "<br>")
}
currentDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

let firstName = prompt("Enter first name")
let lastName = prompt("Enter last name")

function greets (firstName, lastName){
 document.write ("Welcome  " + firstName +" "+ lastName)
}
greets(firstName,lastName)

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

let a = +prompt("Enter a number")
let b = +prompt("Enter a number")

function sum (a,b){
 return  a + b;
}
console.log(sum(a,b));

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

let num1 = parseInt(prompt("Enter a 1number : "));
let num2 = parseInt(prompt("Enter a 2number : "));
let operator = prompt("Enter a operator : ");

function Calculator ( num1,num2,operator){
   if(operator === "+"){
    document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 + num2)+ "<br>");
   }
   else if(operator === "-"){
    document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 - num2)+ "<br>");
   }
   else if(operator === "*"){
    document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 * num2)+ "<br>");
   }
   else if(operator === "/"){
    document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 / num2)+ "<br>");
   }
   else if(operator === "%"){
    document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 % num2)+ "<br>");
   }
   else{
    document.write("It's not a operator!")
   }
}
Calculator(num1,num2,operator)

// 5. Write a function that squares its argument.

function square(a){
    return a * a
}
console.log(square(6));

// 6. Write a function that computes factorial of a number.

function factorial(n) {
    if (n < 0) {
        return -1; // Factorial is not defined for negative numbers
    } else if (n === 0) {
        return 1; // The factorial of 0 is 1
    } else {
        return n * factorial(n - 1); // Recursive call for n * (n-1)!
    }
}

let num = 5;
console.log("Factorial of"+num+" is" +factorial+ num);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

let start_number = +prompt("Enter a start number");
let end_number = +prompt("Enter a end number");
function count(start_number, end_number){
    if(start_number > end_number){
        for(let i = start_number; i>end_number; i--)
            document.write(i + "<br>")
        
    }
    else if(start_number <= end_number){
        for(let i = start_number; i<=end_number; i++)
            document.write(i + "<br>")
    }
    else if(start_number === end_number){
        document.write("both are equal")
    }
}
count(start_number,end_number);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
    return hypotenuse;
}

let base = prompt("Enter the base of the triangle:");
let perpendicular = prompt("Enter the perpendicular of the triangle:");

let hypotenuse = calculateHypotenuse(parseFloat(base), parseFloat(perpendicular));
console.log("Hypotenuse of the triangle with base " +base+ " and" +perpendicular +perpendicular+" is" +hypotenuse);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function areaOfrectangle(width,height){
    return "Area of Rectangle is : "+ width * height;
}
console.log(areaOfrectangle(6,8));
console.log(areaOfrectangle(9, 7));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.



// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}
let inputString = "JSResourceS.com";
let letterToCount = "o";
let occurrences = countLetterOccurrences(inputString, letterToCount);
console.log("The letter "+letterToCount+"occurs "  +occurrences+"times in the string "  +inputString+".");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

let radius = 2
function calcCricumferece (radius ){
    return "The Cricumference cricle is :" + 2* 3.14*radius
}
console.log(calcCricumferece(6,4));


function area (radius ){
    return "The area Cricle is :" + 3.14*radius*radius
}
console.log(area(6));

