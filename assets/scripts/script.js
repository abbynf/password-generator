// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specCharOptions = ["@", "%", "!", "#", "$", "?", "&", "*"];

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
    var upperCase = confirm("Would you like capital letters in the password?");
    var numbers = confirm("Would you like numbers in the password?");
    var specialChar = confirm("Would you like special characters in the password?");

   
    var options = [""]

    if (lowerCase == true)  {
        var options = options.concat(lowerCaseOptions);
        }

    if (upperCase == true) {
        var options = options.concat(upperCaseOptions);
    }

    if (numbers == true) {
        var options = options.concat(numbersOptions);
    }

    if (specialChar == true) {
        var options = options.concat(specCharOptions);
    }

    console.log(options);

    options.shift()

    console.log(options);

    for (i = 0; i < passwordLength; i++) {
        var start = "";
        start += options[Math.floor(Math.random() * options.length)];
        console.log(start);
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
