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



   //Need to build string based on selected parameters

  
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










// //////////////////////////////////

// if (numChar >7, numChar <129) {
//   var loChar = confirm("Use lowercase letters?")
//   var upChar = confirm("Use upper case letters?")
//   var noChar = confirm("Use numbers as characters?")
//   var spChar = confirm("Use special characters?")
// }






// // if (loChar = false)+(upChar = false)+(noChar = false)+(spChar = false){
// //   alert("You must select one type of character.")
// // }
// /////////////////////////////

// writePassword();



// for (var i = 0, n = charset.numChar; i < length; ++i) {
//   retVal += charset.charAt(Math.floor(Math.random() * n));
// }
// return retVal;
// 