// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lengthValue = pwLength
// var ucValue = charCodeAt() //reference 65-90 (uppercase) and 97-122 (lowercase)
// var numValue = [1,2,3,4,5,6,7,8,9,0] //reference 48-57
// var specValue = charCodeat() //33, 35-38, 40-47, 58-64, 91-95
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalCharacters = "1234567890"
var specialCharacters = "!@#$%^&*()"
var characterBank = ""
console.log(characterBank)
console.log(characterBank.concat(lowercaseCharacters))

// Write password to the #password input
function writePassword() {
 // Prompt for character length
  var pwLength = window.prompt ("How many characters would you like to use for you password?");
   if (pwLength > 8 && pwLength < 128) {
    window.alert ("Please decide what type of characters you would like to use in your password");
    } else {
    window.alert ("Your password needs to be 8-128 characters long.")
      writePassword();
    }

//Prompt for including Lowercase Characters
  var lcInclusion = window.confirm ("Would you like to include Lowercase Characters in your password?");
    if (lcInclusion === true) {
      characterBank = characterBank.concat(lowercaseCharacters);
      console.log(lcInclusion)
    }

  
//Prompt for including Uppercase characters
  var ucInclusion = window.confirm ("Would you like to include Uppercase Characters in your password?");
    if (ucInclusion === true) {
     characterBank = characterBank.concat(uppercaseCharacters);
      console.log(ucInclusion)
    }
  

//Prompt for including Numbers 
  var numInclusion = window.confirm ("Would you like to include Numbers in your password?");
    if (numInclusion === true) {
      characterBank = characterBank.concat(numericalCharacters)
      console.log(numInclusion);
    }

//Prompt for including Special characters
  var specInclusion = window.confirm ("Would you like to include Special Characters in you password?");
    if (specInclusion === true) {
     characterBank = characterBank.concat(specialCharacters);
      console.log(specInclusion);
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
      writePassword();
    }

  var passwordText = document.querySelector("#password");
   
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
