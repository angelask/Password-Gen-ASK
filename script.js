// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  
   //console log to verify password

  console.log(password);

}
// 1, click function to prompt user for psw criteria

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ID potential var, decided to use array strings


var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var number =["0", "1", "2" , "3", "4", "5", "6", "7", "8", "9"]
var special =["!", "@", "#", "$", "%", "^", "&", "*"]

function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}


function generatePassword() {
  console.log("This is the generate password function")


  //2, line 21 to 26 criteria to ask user(pwd lenth, chart type)

  var length = parseInt(prompt("How many characters do you want")) 
  console.log(length)

  if(length<8){
    alert("Passoword must be at least 8 characters")
    return
  }

  if(length>128){
    alert("Passoword cannot have more than 128 characters")
    return
  }
 //3, user input validation 

  var hasLowerCase = confirm("Do you want Lower case letters? Please Confirm")
  console.log(hasLowerCase)
  
  var hasUpperCase = confirm("Do you want Upper case letters? Please Confirm");
  console.log(hasUpperCase)

  var hasNumbers = confirm("Do you want numbers, click ok to confirm");
  console.log(hasNumbers)

  var hasSpecChar = confirm("Do you want special Characters, click ok to confirm")
  console.log(hasSpecChar)
  //make if statement if user selects at least 2 critieron

  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumbers === false &&
    hasSpecChar === false
  ) {
    alert("You must select at least one item");
    return;
  }

  //the following defines variables for the results arrays
  var results = [];
  var potentialCharacters = [];
  var guaranteedCharacters = [];

  //concatenation of arrays

  if (hasLowerCase) {
    potentialCharacters = potentialCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));    
  }

  if (hasUpperCase) {
    potentialCharacters = potentialCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  if (hasNumbers) {
    potentialCharacters = potentialCharacters.concat(number);
    guaranteedCharacters.push(getRandom(number));
  }

  if (hasSpecChar) {
    potentialCharacters = potentialCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  }
  // console log to check progress in inspector 
  console.log(potentialCharacters);
  console.log(guaranteedCharacters);

  for (var i = 0; i < length; i++) {
    var possibleCharacter = getRandom(potentialCharacters);
    //id characters for password

    results.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    results[i] = guaranteedCharacters[i];
  }

  console.log(results);
  //4, when psd is gen need to display to page

  return results.join('');

}

 




