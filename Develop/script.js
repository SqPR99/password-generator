// Assignment Code
let generateBtn = document.querySelector("#generate");

// making my strings of characters that will be used in the password, I had some trouble with the backslash but after doing some research I found you need 2 backslahes in order for that to work
let numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];
let passwordLength;
let lowerCheck;
let upperCheck;
let numberCheck;
let specialCheck;
let characters;

// function to decide the length of the password
function determineLength() {
  passwordLength = prompt("Choose how many characters (between 8-128) you want your password to be: ")
  if (passwordLength<8){
    alert("Your password must be over 8 characters long");
    determineLength();
  } else if (passwordLength>128) {
    alert("Your password must be under 128 characters");
    determineLength();
  } else if (null){
    alert("You must choose a number between 8-128")
    determineLength();
  }
  return passwordLength;
}

// determining if there are any lowercase letters in the password
function determineLowercase() {
  lowerCheck = confirm("Do you want to include lowercase letters in your password? (Confirm for Yes / Cancel for No)");
    if (confirm == true) {
      lowerCheck = true;
      return lowerCheck;
    } else if (confirm == false) {
      lowerCheck = false;
      return lowerCheck;   
    }
}

// determining if there are any uppercase letters in the password
function determineUppercase() {
  upperCheck = confirm("Do you want to include uppercase letters in your password? (Confirm for Yes / Cancel for No)");
    if (confirm == true) {
      upperCheck = true;
      return upperCheck;
    } else if (confirm == false) {
      upperCheck = false;
      return upperCheck;
    } 
}

// determining if there are any numbers in the password
function determineNumber() {
  numberCheck = confirm("Do you want to include numbers in your password? (Confirm for Yes / Cancel for No)");
    if (confirm == true) {
      numberCheck = true;
      return numberCheck;
    } else if (confirm == false) {
      numberCheck = false;
      return numberCheck;
    } 
}

// determining if there are any special characters in the password
function determineSpecial() {
  specialCheck = confirm("Do you want to include special characters in your password? (Confirm for Yes / Cancel for No)");
    if (confirm == true) {
      specialCheck = true;
      return specialCheck;
    } else if (confirm == false) {
      specialCheck = false;
      return specialCheck;
    } 
}

// main function
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineLowercase();
  console.log(lowerCheck);
  determineUppercase();
  console.log(upperCheck);
  determineNumber();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

let password = "";
let characters = [];

// final if statements to check the characters
if (upperCheck){
    characters = characters.concat(upperCharacters);
}

if (lowerCheck){
    characters = characters.concat(lowerCharacters);
}

if (numberCheck){
    characters = characters.concat(numberCharacters);
}

if (specialCheck){
    characters = characters.concat(specialCharacters);
}
  for (let i = 0; i < passwordLength; i++){
      const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

generateBtn.addEventListener("click", writePassword);
