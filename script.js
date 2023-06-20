// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalCharacters = "1234567890"
var specialCharacters = "!@#$%^&*()"
var characterBank = ""

// Write password to the #password input
function writePassword() {

 // Prompt for character length
  var pwLength = window.prompt ("How many characters would you like to use for you password?");
   if (pwLength >= 8 && pwLength <= 128) {
    window.alert ("Please decide what type of characters you would like to use in your password");
    } else {
    window.alert ("Your password needs to be 8-128 characters long.");
      return writePassword
    }

//Prompt for including Lowercase Characters
  var lcInclusion = window.confirm ("Would you like to include Lowercase Characters in your password?");
    if (lcInclusion === true) {
      characterBank = characterBank.concat(lowercaseCharacters);
    }

  
//Prompt for including Uppercase characters
  var ucInclusion = window.confirm ("Would you like to include Uppercase Characters in your password?");
    if (ucInclusion === true) {
     characterBank = characterBank.concat(uppercaseCharacters);
    }
  

//Prompt for including Numbers 
  var numInclusion = window.confirm ("Would you like to include Numbers in your password?");
    if (numInclusion === true) {
      characterBank = characterBank.concat(numericalCharacters)
    }

//Prompt for including Special characters
  var specInclusion = window.confirm ("Would you like to include Special Characters in you password?");
    if (specInclusion === true) {
     characterBank = characterBank.concat(specialCharacters);
    }

    //This Generates the password. 
    var password = ""
    if (lcInclusion || ucInclusion || numInclusion || specInclusion) {
      for (var i = 1; i <= pwLength; i++) {
        var pwCharacter = characterBank.charAt(Math.floor(Math.random() * characterBank.length));
       password = password.concat(pwCharacter);
      } 
    } else {
      window.alert("Please use at least one character type for you password");
      return writePassword
    }

  var passwordText = document.querySelector("#password");
   
  passwordText.value = password;

  return writePassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
