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

//Click button prompt appears
//I have a series of prompts for password criteria
//userpicks the critera
//there is a minimum of 8 and maxium of 128 characters
//confirmation of whether or not to include lowercase, uppercase, numberic, and/or special characters
//when all prompts are answered then a password is generated. 