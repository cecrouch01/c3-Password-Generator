// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.value = password;
}

// Add event listener to generate button
//I replaced writePassword with this function
generateBtn.addEventListener("click", function(){
  var passwordCharacters = window.prompt("How many characters would you like to use for your password?");
    if (passwordCharacters < 8){
    window.alert("Please make your password between 8 and 128 characters")
    } else if (passwordCharacters > 128){
      window.alert("Please make your password between 8 and 128 characters")
    } else {{var uppercaseInclusionOne = window.confirm ("Would you like to use both Uppercase and Lowercase Letters in your password?");
        if (uppercaseInclusionOne === true){var numericalInclusionOne =
          window.confirm("Would you like to use numbers in your password?");
            if (numericalInclusionOne === true){
              var specialCharInclusionOne = window.confirm ("Would you like to include special characters?");
                if (specialCharInclusionOne === true){
                  window.alert("Thank you!")
                } else {window.alert("Thank you!")}
            } else {var specialCharInclusionTwo = window.confirm ("Would you like to include special characters?");
              if (specialCharInclusionTwo === true){
                window.alert("Thank you!")
              } else {window.alert("Thank you!")}}
        } else {var numbericalInclusionTwo = window.confirm("Would you like to use numbers in your password?");
        if (numbericalInclusionTwo === true){
          var specialCharInclusionThree = window.confirm ("Would you like to include special characters?");
            if (specialCharInclusionThree === true) {
              window.alert("Thank you!");
            } else {window.alert("Thank you!")}
        } else {var specialInclusionFour = window.confirm("Would you like to include special characters?");
          if (specialInclusionFour === true) {
            window.alert("Thank you!")
          } else {window.alert("Thank you!")}
      }}}}
    });
//uppercase/lowercase, numeric, special characters
//Click button prompt appears
//I have a series of prompts for password criteria
//userpicks the critera
//there is a minimum of 8 and maxium of 128 characters
//confirmation of whether or not to include lowercase, uppercase, numberic, and/or special characters
//when all prompts are answered then a password is generated. 