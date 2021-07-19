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

var questionEl=document.getElementById("questions");
var timerEl=document.getElementById("timer");

//Div elements
var introDiv = document.querySelector(".intro");
var quizDiv = document.querySelector(".quizs");
var resultDiv = document.querySelector(".result");


//variables
var startButton=document.querySelector(".start-button");
var resultScore=document.querySelector(".result-score");


//get values of answers
var ans1=document.getElementById('ans1');
var ans2=document.getElementById('ans2');
var ans3=document.getElementById('ans3');
var ans4=document.getElementById('ans4');

function init(){
		quizDiv.textContent="";
		resultDiv.textContent	="";
}



function startGame(){
		codingQuiz();
}

//The codingQuiz function is called when the start button is clicked
function codingQuiz(){
	var solved = false; 
	var timeLeft = 10;
	var timeInterval = setInterval(function () {
	  timerEl.textContent = timeLeft;
	  timeLeft--;
	//if time is over, show result
	if(timeLeft===0){
		clearInterval(timeInterval);
		showResult();
	}
	//if not, show questions
	else {
	  for(var i=0; i<myQuestions.length; i++){
	    questionEl.textContent=myQuestions[i].question;
		  ans1.textContent=myQuestions[i].answers["a"];
		  ans2.textContent=myQuestions[i].answers["b"];
		  ans3.textContent=myQuestions[i].answers["c"];
		  ans4.textContent=myQuestions[i].answers["d"];
		
	  }
	}

  },1000);
}

function showQuestions(questions, quizContiner){
	//we need a place to store teh output and teh answer choices
	var output=[];
	var answers; 
	for(var i=0; i<myQuestions.length; i++){
			answers=[];


	      questionEl.textContent=myQuestions[i].question;
		  ans1.textContent=myQuestions[i].answers["a"];
		  ans2.textContent=myQuestions[i].answers["b"];
		  ans3.textContent=myQuestions[i].answers["c"];
		  ans4.textContent=myQuestions[i].answers["d"];
		
	  }


}

function showResult() {
	//
	quizDiv.textContent="";
	resultScore.textContent="result";
}


//Helper functions for 4 answer buttons 
ans1.addEventListener("click", function(event) {
	answerQuiz(0);
});
ans2.addEventListener("click", function(event) {
	answerQuiz(1);
});
ans3.addEventListener("click", function(event) {
	answerQuiz(2);
});
ans4.addEventListener("click", function(event) {
	answerQuiz(3);
});

startButton.addEventListener("click", startGame);
init();