// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// playing with code
// ID potential var
// 1, click function to prompt user for psw criteria
//2, line 21 to 26 criteria to ask user(pwd lenth, chart type)
//3, user input validation 
//4, when psd is gen need to display to page

var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var number =["0", "1", "2" , "3", "4", "5", "6", "7", "8", "9"]
var special =["!", "@", "#", "$", "%", "^", "&", "*"]

function generatePassword() {
  console.log("This is the generate password function")

  var length=parseInt(prompt("How many characters do you want")) 
  console.log(length)

  if(length<8){
    alert("Passoword must be at least 8 characters")
    return
  }

  if(length>128){
    alert("Passoword cannot have more than 128 characters")
    return
  }


  var hasLowerCase = confirm("click ok to confirm")
  console.log(hasLowerCase)
  

  //make if statement if user selects at least 1 critieron

  if(hasLowerCase==true) {
    confirm("click ok to confirm include lower cases");
  }
 
  if(hasLowerCase === false) {
    alert("must have on character type")
    return
  }
  
  
// 2nd criteria
var hasUpperCase = confirm("click ok to confirm");
  console.log(hasUpperCase)

  if(hasUpperCase==true) {
    confirm("click ok to confirm include Upper cases");
  }

  if(hasUpperCase === false) {
    alert("must have on character type")
    return
  }
  
var hasSpecChar = confirm("click ok to confirm")
console.log(hasSpecChar)

if(hasSpecChar==true) {
  confirm("click ok to confirm include special characters");
  
}
if(hasSpecChar === false) {
  alert("must have on character type")
  return

}

//var getRandomPassword = () => "${lowerCase[Math.floor(Math.random() * upperCase.length)]}";

 
// for statement
//var password = "",
//var length = parseInt(document.generator.length.value)

 for (var i = 0; i < lowerCase.length; i++) {
    console.log(i, lowerCase[i])
 }
 

 for (var i = 0; i < upperCase.length; i++) {
  console.log(i, upperCase[i])
 }

 for (var i = 0; i < number.length; i++) {
  console.log(i, number[i])
}

for (var i = 0; i < special.length; i++) {
  console.log(i, special[i])
}
for (var i = 0; i < length.length; i++) {
     console.log(i, length[i])
}
   
  //concatenation
  function myFunction() {
    var length = lowerCase.concat(upperCase, number, special);
    document.getElementById("generate").innerHTML = length;

    console.log(length)
  }
// push password to user
    function myFunction() {
      length.push("length");
      document.getElementById("generate").innerHTML = length;

    

  
  }
}
