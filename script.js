// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lengthValue = pwLength
// var ucValue = charCodeAt() //reference 65-90 (uppercase) and 97-122 (lowercase)
// var numValue = [1,2,3,4,5,6,7,8,9,0] //reference 48-57
// var specValue = charCodeat() //33, 35-38, 40-47, 58-64, 91-95

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = "!@#$%^&*()"
var characterBank = ""
var randomIndex = Math.floor(Math.random() * upperCase.length);

console.log(upperCase[randomIndex])
console.log(upperCase.length)

// Write password to the #password input
function writePassword() {
 // Prompt for character length
  var pwLength = window.prompt ("How many characters would you like to use for you password?");
   if (pwLength > 8 && pwLength < 128) {
    window.alert ("Hurray");
    } else {
    window.alert ("Boo!")
      writePassword();
    } //return lengthValue

//Prompt for including Lowercase Characters
  var lcInclusion = window.confirm ("Would you like to include Uppercase Characters in your password?");
    console.log(lcInclusion)

//Prompt for including Uppercase characters
  var ucInclusion = window.confirm ("Would you like to include Uppercase Characters in your password?"); 
    console.log (ucInclusion)


//Prompt for including Numbers 
  var numInclusion = window.confirm ("Would you like to include Numbers in your password?")
    console.log(numInclusion)

  
//Prompt for including Special characters
  var specInclusion = window.confirm ("Would you like to include special characters in you password?");
    console.log(specInclusion)
  
//if ucinclusion, numinclusion, specinclusion i must use uppercase numbers and special characters in my password of pwlength


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




