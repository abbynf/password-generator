// Code for the generate variable
var generateBtn = document.querySelector("#generate");

// Variables for each of the character options, which may be combined based on user input
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specCharOptions = ["@", "%", "!", "#", "$", "?", "&", "*"];

function generatePassword() {
    var passwordLength = prompt("How many characters?");
        // if/else conditional to ensure a minimum of 8 characters and a maximum of 128
        if (passwordLength < 8) {
            alert("Too few characters selected. Please click \"generate password\" please try again");
            return;
        }
        else if (passwordLength > 128) {
            alert("Too many characters. Please click \"generate password\" to try again.");
            return;
        }

    // List of variables that allow the user to choose character types using confirms
    var lowerCase = confirm("Would you like lower case letters in the password?");
    var upperCase = confirm("Would you like capital letters in the password?");
    var numbers = confirm("Would you like numbers in the password?");
    var specialChar = confirm("Would you like special characters in the password? i.e. @ % ! # $ ? & *");

    // if conditional to ensure that the user selects at least one type of character
    if (lowerCase == false && upperCase == false && numbers == false && specialChar == false){
        alert("No characters chosen. Please click \"generate password\" to try again");
    }

   
    // This array will be used to collect all of the character options. It starts out empty. The password will be chosen from this array
    var options = [""]

    // a series of if conditions will add the arrays from before if the user opts for that category of character
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

    // The options array started with a blank string that must be removed so it doesn't get chosen as a character
    options.shift()

    // set up an empty array from the characters for the password to go into after the character has been chosen from the options array
    var draft = [];

    // this for loop inserts random characters from the options array into the empty array
    for (i = 0; i < passwordLength; i++){
        draft.push(options[Math.floor(Math.random()*options.length)]);
    }

    // The draft array is joined to change it from an array to a string with no commas or quotation marks
  return draft.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
