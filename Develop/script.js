// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Student Code
var generatePassword = function () {
   //Define variables
   var loChar = "abcdefghijklmnopqrstuvwxyz"
   var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   var noChar = "1234567890"
   var spChar = "!'()*+,-./:;<=>?@[\]^_`{|}~" 

//Determine number of characters for password from user input
var numChar;
  do {
    numChar = prompt("How many characters? (8-128)");
    numChar = parseInt(numChar);//Prompt currently returns a string, we need to cnvert it into an integer  
  }while(numChar < 8 || numChar > 129);
  if (isNaN(numChar)){
  alert("Please enter a number.");
  return;
}

//Password Parameters
var loCon = confirm("Would you like to include lower case characters?");
var upCon = confirm("Would you like to include upper case characters?");
var noCon = confirm("Would you like to include numerical characters?")
var spCon = confirm("Would you like to include special characters?")

//Need to build string based on selected parameters
var appChar = ""; //Begin variable "Approved Characters" as empty then add to it as parameters return "true"
if (loCon) appChar += loChar;
if (upCon) appChar += upChar;
if (noCon) appChar += noChar;
if (spCon) appChar += spChar;

//Need to have a random a random character chosen from array of "Approved Characters (appChar)"
var getRandoChar = function () {
  var randoIndex = Math.floor(Math.random() * appChar.length);
  return appChar [randoIndex];
}

console.log(getRandoChar());

  
//   var charSet = "";
// if (numChar < 8) {
// {alert("Number of characters must be greater than 8.")}{
//   return;
// }
// }
// if (numChar >128) {
// alert("Number of characters must be less than 128.")}
// {
//   return;
// }
// }
// var loCon = confirm("Would you like to include lower case characters?");

// if (loCon = true) {
// charSet =  loChar 
// }else {
// charSet = ""
// }

// var upCon = confirm("Would you like to include upper case characters?");

// if (upCon = true) {
// charSet = loChar + upChar
// }
}