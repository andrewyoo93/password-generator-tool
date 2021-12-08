// Global variables
var generateBtn = document.querySelector("#generate");
var lttrLwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lttrUppr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Could not add "\" backslash into the array, ask in office hours
var spclChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", "]", "}", "|", ";", ":", "'", '"', "<", ",", ">", ".", "`", "~", "/", "?"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var outputPass = ""

// Function to start prompting user on generating a new password
function generatePassword() {

  // Prompt to set password length
  var passLength = prompt("Please input the desired length. Input from 8 to 128 is required.");

  // Test for if input is between 8 to 128
  if (passLength <= 8 || passLength >= 128) {

    // Ends input if length is outside the specified range
    window.alert("Input is required to be anywhere from 8 to 128. Please restart.")
    return
  }

  // Character type prompts
  var lttrLwrOption = confirm("Should lower case letters be included in the password?")
  var lttrUpprOption = confirm("Should upper case letters be included in the password?")
  var spclCharOption = confirm("Should special characters be included in the password?")
  var numbersOption = confirm("Should numbers be included in the password?")

  // Ends input if no character options were chosen
  if (!lttrLwrOption && !lttrUpprOption && !spclCharOption && !numbersOption) {
    window.alert("At least one of the character options must be chosen. Please restart.")
    return
  }



}

// // ---------
// // TEST CODE
// // ---------
// var passLength = 12
// var allOptions = lttrLwr.concat(lttrUppr, spclChar, numbers)
// var outputPass = ""

// console.log(allOptions)

// // Function for generating password
// function generatePassword() {
//   // For length of password chosen, keep adding a new entry to the output
//   for (var i = 0; i < passLength; i++) {
//     // Assigns the formula to outputPass and outputs the resulting variable
//     // allOptions[integer number of the character to chose to add]
//     // Math.floor to round random output of math random
//     // allOptions.length to set the max possible random number
//     outputPass += allOptions[Math.floor(Math.random() * allOptions.length)];
//     console.log(outputPass)
//   } return outputPass
// }
// generatePassword();
// // ----------------
// // END OF TEST CODE
// // ----------------

// Code needed to get password onto html page
// var password is the final password text after the randomization has completed
// var password = "abc123Test"

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
