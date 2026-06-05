/* Paste your code from the last task */
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

var pocketMoney = 4;
console.log (pocketMoney);

let ratingArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];

/****************************
Functions
****************************/
function rating(){
  OUTPUT.innerHTML += "<p>On a scale of 0-3 how much do you like chocolate</p>";
}
rating()

function welcome(){
  OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}

welcome()

function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  userName = NAME_FIELD.value;
  OUTPUT.innerHTML += "<p>Your name is "+userName+"</p>";

  const AGE_FIELD = document.getElementById("ageField");
  userAge = Number(AGE_FIELD.value);
   OUTPUT.innerHTML += "<p>Your age is "+userAge+"</p>";
  
   const MONEY_FIELD = document.getElementById("moneyField");
   pocketMoney = Number(MONEY_FIELD.value);
   OUTPUT.innerHTML += "<p>Your pocket money is "+pocketMoney+"</p>";

   const CHOOSE_FIELD = document.getElementById("chooseField");
choice = CHOOSE_FIELD.value;
 
OUTPUT.innerHTML = "You chose:"+ratingArray[choice]+"<br>";

}


function calculateChange(_price, _change){
  change = pocketMoney - _price;
  return change;
  if (change >= 0){
  console.log("You will get $" + change + "change");
  OUTPUT.innerHTML += "<p> You will get $" +change+ "change</p>";
  
}
} 

function start() {
  OUTPUT.innerHTML
  OUTPUT.innerHTML
  answer = currentYear - userAge;
  OUTPUT.innerHTML


function chocolate(){
  OUTPUT.innerHTML += "<p>Chocolate bars costs $4</p>";
}



chocolate()
calculateChange(4, pocketMoney)
if(pocketMoney >=4) {
    console.log ("You can afford a chocolate bar")
    OUTPUT.innerHTML += "<p>You can afford a chocolate bar</p>";
} else {
    console.log ("You can't afford a chocolate bar")
      OUTPUT.innerHTML += "<p>You can't afford a chocolate bar</p>";
}

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
}

