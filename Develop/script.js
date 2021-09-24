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
var generatePassword = function () {                //Create starting function for when generatePassword is called upon
   var loChar = "abcdefghijklmnopqrstuvwxyz"        //Create string for all of the characters allowed, seperated into specific variables: lower case, upper case, numbers, and special characters.
   var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   var noChar = "1234567890"
   var spChar = "`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?";

  //Determine number of characters for password from user input
  var numChar;
  do {
    numChar = prompt("How many characters? (8-128)");       //Prompt requires user to input a string of characters
    numChar = parseInt(numChar);                          //With prompt currently returning a string, we need to cnvert it into an integer  
  }while(numChar < 8 || numChar >= 129);                   //Utilized a do/while loop to tell the function to only run "while" the stated conditions are met, if a number outside of the range is inputted, then the loop function will reject it until the user inputs an allowed number.
  if(isNaN(numChar)){                                    //Created an alert to activate if theinput to beginning prompt is anything besides a number
  alert("Please enter a number between between 7 and 129.");
  return "";
}

//Password Parameters
var loCon = confirm("Would you like to include lower case characters?");      //Established the password parameters using confirms to return boolean values on whether or not to use a specific type of character
var upCon = confirm("Would you like to include upper case characters?");
var noCon = confirm("Would you like to include numerical characters?")
var spCon = confirm("Would you like to include special characters?")

//Build a string based on true/false responses from confirms for Password Parameters
var appChar = ""; 
if (loCon) appChar += loChar;  //if the variable for the specific character results in true from the confirm then it is added to the string of approved characters (appChar)
if (upCon) appChar += upChar;
if (noCon) appChar += noChar;
if (spCon) appChar += spChar;

//Generate a random character from the created string of approved characters (appChar) using a function we are naming getRandoChar
var getRandoChar = function () {
  var randoIndex = Math.floor(Math.random() * appChar.length);  //Math.floor/random is used to generate a random whole integer that is then multiplied by the length of approved character string and named it randoIndex
  return appChar [randoIndex];                                  //the randoIndex is then used as the place selector in the string of approved characters (appChar) 
}

//*test to see if a ranom character appears in console log*
// console.log(getRandoChar()); 

//Add a random character to the password using a loop for the length of the numChar
var password = "";              //password begins blank when loop starts
for(i=0; i < numChar; i++){     //i is representing the starting place of zero and the loop will run as long as i stay belows the approved number of characters (numChar) and i will increase by 1 everytime the loop runs                
  password += getRandoChar();   //the password string is added to with random characters pulled from getRandoChar function
}{return password;}             //lastly returned is the final password generated
}