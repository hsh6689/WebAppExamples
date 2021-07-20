const myQuestions = [
  {
	question: "Question1?",
	answers: {
		a: "Apple",
		b: "Banana",
		c: "Cherry",
		d: "Donut"
	},
	correctAnswer: "Apple"
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

var timer=document.getElementById("timer");

//Div elements
var introDiv = document.querySelector(".intro");
var quizDiv = document.querySelector(".quizs");
var resultDiv = document.querySelector(".result");

//variables
var startButton=document.querySelector(".start-button");
var submitButton=document.querySelector(".submit-button");
var resultScore=document.querySelector(".result-score");

//instant variables
var timeLeft;
var currentQuestion=0;

var ans1=document.createElement("button");
var ans2=document.createElement("button");
var ans3=document.createElement("button");
var ans4=document.createElement("button");
var quizQuestion=document.createElement("h3");

function init(){	
	quizDiv.hidden=true;
	resultDiv.hidden=true;
	timeLeft=25;
	timer.textContent = "Time left: "+ timeLeft;
}

function startGame(){
	quizDiv.hidden=false;
	introDiv.hidden=true;
	var timeInterval = setInterval(function () {
		//Show time and decrement
	  timer.textContent = "Time left: "+timeLeft;	  
	  //if time is over, show result	  
	  if(timeLeft<=0 || currentQuestion>=myQuestions.length){
		  clearInterval(timeInterval);
		  showResult();
	  }
	  else{
	  	generateQuiz();
	  }
	  timeLeft--;
  },1000);
}

//The generateQuiz function is called when the start button is clicked
function generateQuiz(){
  quizQuestion.textContent=myQuestions[currentQuestion].question;
	ans1.textContent=myQuestions[currentQuestion].answers["a"];
	ans2.textContent=myQuestions[currentQuestion].answers["b"];
	ans3.textContent=myQuestions[currentQuestion].answers["c"];
	ans4.textContent=myQuestions[currentQuestion].answers["d"];

	quizDiv.appendChild(quizQuestion);
	quizDiv.appendChild(ans1);
	quizDiv.appendChild(ans2);
	quizDiv.appendChild(ans3);
	quizDiv.appendChild(ans4);
}

function checkAnswer(answer){
	//answer is correct
	if (answer === myQuestions[currentQuestion].correctAnswer){
		timeLeft+=10;
		console.log("Score + 10, current Score: "+timeLeft);
	}
	else {
		//if time left is less than 0, set score to 0
		if (timeLeft<10){
			timeLeft=0;
		}
		else {
			timeLeft-=10;
		}
		console.log("Score - 10, current Score: "+timeLeft);
	}
};

function showResult() {
	quizDiv.hidden=true;
	resultDiv.hidden=false;
	resultScore.textContent="Your Score is: "+timeLeft;
}


//Handle button clicks
quizDiv.addEventListener("click", function(event) {
  var element = event.target;
  console.log("which answer did you click? \n" + element.textContent);

  if (element.matches("button")) {
  	console.log("Matches with answer! \n");
  	checkAnswer(element.textContent);
  }
  else {
  	console.log("not match! \n");
  }
  currentQuestion++;
});

init();
//Quiz starts when start button clicked
startButton.addEventListener("click", startGame);
//Submit score to scoreboard when submit button clicked
submitButton.addEventListener("click", submitScore);