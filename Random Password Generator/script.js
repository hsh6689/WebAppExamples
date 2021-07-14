// Assignment Code
var pswLowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
				  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pswUpperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
				  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var pswNums=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var pswSpecialChars=[" ","!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",
				 ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", 
				 "`", "{", "|", "}", "~"];

var tempArr = [];

function generatePassword(){
	//ask how many char i need
		//if not, ask again with message
	var length = window.prompt("Enter the length of password:");
	  //if length doesn't match, return error
	  if (!(8<=length && length<=128)){
	  	return "password needs to be longer than 8 chars";
	  }

	//ask if I will use lower case
	var lowerCase = window.confirm("Will you use lower cases?");
	  if (lowerCase) {
		tempArr = pswLowerCase;
	  }
	//ask if I will use upper case
	var upperCase = window.confirm("Will you use Upper cases?");
	  if (upperCase) {
		tempArr = tempArr.concat(pswUpperCase);
	  }

	//ask if I will use numbers
	var nums = window.confirm("Will you use numbers?");
	  if (nums) {
		tempArr = tempArr.concat(pswNums);
	  }

	//ask if I will use special chars
	var specialChars = window.confirm("Will you use speical characters?");
	  if (specialChars) {
		tempArr = tempArr.concat(pswSpecialChars);
	  }

	//Check if user has selected at least 1 question
	  if (tempArr.length === 0 ) {
		return "Must select at least one question."
	  }

	//Now we created temp array with all criteria, create a random password
	var ans="";
	  for (var i=0; i<length; i++) {
		var rand = tempArr[Math.floor(Math.random() * tempArr.length )];
		ans+= rand;
	  }
	return ans;
}

//selects the "generate" object from HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
