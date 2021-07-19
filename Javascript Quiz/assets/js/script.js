const myQuestions = [
  {
	question: "Question1?",
	answers: {
		a: "a",
		b: "b",
		c: "c",
		d: "d"
	},
	correctAnswer: "a"
  },
  {
	question: "Question2?",
	answers: {
		a: "a",
		b: "b",
		c: "c",
		d: "d"
	},
	correctAnswer: "a"
  },
  {
	question: "Question3?",
	answers: {
		a: "a",
		b: "b",
		c: "c",
		d: "d"
	},
	correctAnswer: "a"
  },
  {
	question: "Question4?",
	answers: {
		a: "a",
		b: "b",
		c: "c",
		d: "d"
	},
	correctAnswer: "a"
  }
];

var timerEl=document.getElementById("timer");

//Div elements
var introDiv = document.querySelector(".intro");
var quizDiv = document.querySelector(".quizs");
var resultDiv = document.querySelector(".result");


//variables
var startButton=document.querySelector(".start-button");
var resultScore=document.querySelector(".result-score");


//get values of answers


function init(){
		resultDiv.textContent	="";
}



function startGame(){
		startTimer();
		codingQuiz();
}

function startTimer(){
	var solved = false; 
	var timeLeft = 9;
	var timeInterval = setInterval(function () {
	  timerEl.textContent = timeLeft;
	  timeLeft--;
	  //if time is over, show result
	  if(timeLeft===0){
		  clearInterval(timeInterval);
		  showResult();
	  }
  },1000);
}

//The codingQuiz function is called when the start button is clicked
function codingQuiz(){
  for(var i=0; i<myQuestions.length; i++){
  	var ans1=document.createElement("button");
  	var ans2=document.createElement("button");
		var ans3=document.createElement("button");
		var ans4=document.createElement("button");
		var question=document.createElement("h3");

    question.textContent=myQuestions[i].question;
	  ans1.textContent=myQuestions[i].answers["a"];
	  ans2.textContent=myQuestions[i].answers["b"];
	  ans3.textContent=myQuestions[i].answers["c"];
	  ans4.textContent=myQuestions[i].answers["d"];

	  quizDiv.appendChild(question);
		quizDiv.appendChild(ans1);
		quizDiv.appendChild(ans2);
		quizDiv.appendChild(ans3);
		quizDiv.appendChild(ans4);

	  console.log("This is : " + ans1.textContent);
  }
}

function showResult() {
	//
	quizDiv.textContent="";
	resultScore.textContent="result";
}


startButton.addEventListener("click", startGame);
init();