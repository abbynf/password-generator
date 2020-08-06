// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    console.log("generatePassword is running");
    var passwordLength = prompt("How many characters?");
        if (passwordLength < 8) {
            alert("Too few characters selected. Please click \"generate password\" please try again");
            return;
        }
        else if (passwordLength > 128) {
            alert("Too many characters. Please click \"generate password\" to try again.");
            return;
        }
    var lowerCase = confirm("Would you like lower case letters in the password?");
    var upperCase = confirm("Would you like capital letters in the password?")
    var numbers = confirm("Would you like numbers in the password?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
