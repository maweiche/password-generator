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

// //////////////////////////////////
var numChar = prompt("How many characters?", "8");  
if (numChar < 8) {
  alert("Number of characters must be greater than 8.")
}
if (numChar >128) {
  alert("Number of characters must be less than 128.")
}
if (numChar >7, numChar <129) {
  var loChar = confirm("Use lowercase letters?")
  var upChar = confirm("Use upper case letters?")
  var noChar = confirm("Use numbers as characters?")
  var spChar = confirm("Use special characters?")
}
// if (loChar = false)+(upChar = false)+(noChar = false)+(spChar = false){
//   alert("You must select one type of character.")
// }
/////////////////////////////

Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)

function doIt(){
  prompt('Here is your shiny new password:', 
      Math.random().toString(36).slice(2) + 
      Math.random().toString(36).slice(2)
  );
}

doIt();