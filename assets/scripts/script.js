// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
    console.log("generatePassword is running");
    var passwordLength = prompt("How many characters?")
        if (passwordLength < 8) {
            alert("Too few characters selected. Please click \"generate password\" please try again");
        }
        else if (passwordLength > 128) {
            alert("Too many characters. Please click \"generate password\" to try again.");
        }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
