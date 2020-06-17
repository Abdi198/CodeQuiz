//button that when clicked on starts the game
document.getElementById("btn1").addEventListener("click", function(){
	document.getElementById("btn1").style.display = "none";
	var timer = setInterval(function(){
		if (time === 0) {
			clearInterval(timer);
			alert("You Are Out Of Time!")
		}
		time = time - 1
		document.getElementById("timer").innerText = time
		console.log(time)
	},1000)
	var question = document.createElement("P")
	question.innerText = questions[currentQuestion].Question
	document.getElementById("questionArea").appendChild(question);
	for (let i = 0; i < questions[currentQuestion].Choices.length; i++) {
		var choice = document.createElement("button")
	choice.innerText = questions[currentQuestion].Choices[i]
	document.getElementById("questionArea").appendChild(choice)
	

	}
	
});



var time = 60
var currentQuestion = 0
// timer for clock starts counting down

// Questions are presented with mutliple choice answers
var questions = [
	{
		Question: "How do you create a function in JavaScript?", 
		Choices: ["function:myFunction()", "function:myFUnction()", "function = myFunction()"],
		Answer: "function = myFunction()"
	},

	{
		Question: "How can you add a comment in a JavaScript??", 
		Choices: ["//comment()", "<!--comment-->()", "'comment()"],
		Answer: "<!--comment-->()"
	},

	{
		Question: "Which operator is used to assign a value to a variable?", 
		Choices: ["-()", "=()", "X()", "*()"],
		Answer: "=()"
	},

	{
		Question: "JavaScript is the same as Java?", 
		Choices: ["True;()", "False;()"],
		Answer: "False;()"
	},

	{
		Question: "How do you declare a JavaScript variable??", 
		Choices: ["variable carName;()", "var carName;()", "function = v carName;()"],
		Answer: "var carName;()"
	},



]
//if answer is correct move on to the next question
//else subtract from time and alert "incorrect answer"
//then move on to the next question


// when user goes through all the quetions display score and allow user to enter intials