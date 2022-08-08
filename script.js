// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Function used for password length
function determineLength (){
  passwordLength = prompt("Create a password with 8-128 characters:");

  if (passwordLength<8){
    alert("Your password must contain between 8-128 characters");
    determineLength();
  }else if (passwordLength>128){
    alert("Your password must contain between 8-128 characters");
    determineLength();
}
}

//Function used for user that chooses uppercase characters
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to use uppercase letters in your password? (Y/N)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck = null || uppercaseCheck = ""){
      alert("Please answer Y or N");
      determineUppercase();

    }else if (uppercaseCheck = "yes" || uppercaseCheck ="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck = "no" || uppercaseCheck ="n"){
      uppercaseCheck = false;
      return uppercaseCheck;

    }else {
      alert("Please answer Y or N");
      determineUppercase();
    }
    return uppercaseCheck;
}

//Function used for user that chooses numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? (Y/N)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck = null || numberCheck = ""){
      alert("Please answer Y or N");
      determineNumbers();

    }else if (numberCheck = "yes" || numberCheck ="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck = "no" || numberCheck ="n"){
      numberCheck = false;
      return numberCheck;

    }else {
      alert("Please answer Y or N");
      determineNumbers();
    }
    return numberCheck;
}

//Function used for user that chooses special characters
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? (Y/N)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck = null || specialCheck = ""){
      alert("Please answer Y or N");
      determineSpecial();

    }else if (specialCheck = "yes" || specialCheck ="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck = "no" || specialCheck ="n"){
      specialCheck = false;
      return specialCheck;

    }else {
      alert("Please answer Y or N");
      determineSpecial();
    }
    return specialCheck;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
