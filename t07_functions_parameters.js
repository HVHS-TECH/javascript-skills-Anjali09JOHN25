/* Paste your code from task 6 here */
/****************************
Introduction to JavaScript
****************************/
console.log("Running t06_functions.js")
console.log("Hello, my name is Anjali")

const OUTPUT = document.getElementById("JavaScriptOutput");

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
Functions
****************************/
function welcome(){
  OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}

function displayWelcome(_food, _price){
  OUTPUT.innerHTML += "<p>Chocolate bar: "+_food+"</p>";
  OUTPUT.innerHTML += "<p>Chips: "+_price+" </p>";
   OUTPUT.innerHTML += "<p>:$ "+_price+"</p>";
}


welcome()

displayWelcome("Chocolate bar", 4);
displayWelcome("Chips", 3);
displayWelcome("Drink", 2.50);

/****************************
Main Code
****************************/

OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
OUTPUT.innerHTML += "<p>As of " + currentYear + "you are " + userAge + "years old </p>";
OUTPUT.innerHTML += "<p> You have" + pocketMoney + "dollars</p>";
OUTPUT.innerHTML += "<img src='Dog.jpeg' alt='A cute dog'>";


console.log ("Hi" + userName)
console.log ("As of" +  currentYear  + "you are" + userAge + "years old")
console.log ("In 10 years you will be", userAge + '10'  + "years old" )
console.log ("You have" + pocketMoney + "dollars")
console.log ("You spend half of your money, now you have", pocketMoney / 2 +"dollars")
console.log ("Then you get 3 dollars, now you have", pocketMoney + 3 +"dollars")


/****************************
Functions
****************************/
