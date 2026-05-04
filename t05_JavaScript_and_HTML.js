/* Paste your code from task 3, Maths here */
/****************************
Introduction to JavaScript
****************************/
console.log("Running t05_JavaScript_and_HTML.js")
console.log("Hello, my name is Anjali")

// Variables
var pocketMoney = 4;
console.log (pocketMoney);

var userName = "Anjali";
console.log (userName);

var userAge = 15;
console.log (userAge);

var currentYear = 2026;
console.log (currentYear);

/****************************
Main Code
****************************/
console.log ("Hi" + userName)
console.log ("As of" +  currentYear  + "you are" + userAge + "years old")
console.log ("" )
console.log ("You have" + pocketMoney + "dollars")
console.log ("You spend half of your money, now you have", pocketMoney / 2 +"dollars")
console.log ("Then you get 3 dollars, now you have", pocketMoney + 3 +"dollars")

const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML = "<p>Hello" + userName + "</p>";
OUTPUT.innerHTML = "<p> JavaScript and HTML </p>";
OUTPUT.innerHTML = "<p>Third Paragraph line.</p>";


/****************************
Functions
****************************/
