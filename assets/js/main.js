var ans = [];
var contAns =document.querySelector("#container-answers");
var contQues =document.querySelector("#container-question");
var mainCont =document.querySelector("#quiz-container");


// need a collection of objects that hold the questions
var questionsList = [{
  question:"question1?",
  answers:["answer1","answer2","answer3","answer4"],
  incorrect:["answer1","answer3","answer4"],
},
{
  question:"question2?",
  answers:["answer1","answer2","answer3","answer4"],
  incorrect:["answer1","answer2","answer3"],
},
{
  question:"question3?",
  answers:["answer1","answer2","answer3","answer4"],
  incorrect:["answer2","answer3","answer4"],
},
{
  question:"question4?",
  answers:["answer1","answer2","answer3","answer4"],
  incorrect:["answer1","answer2","answer3"],
},
{
  question:"question5?",
  answers:["answer1","answer2","answer3","answer4"],
  incorrect:["answer1","answer2","answer4"],
}];



function startScreen(){
  // starts at zero
  ans = [];
// create
  var item = document.createElement("li");
  var btn = document.createElement("button");
//modify/add attributes
  btn.textContent = "start";
  btn.setAttribute("id", "start-button");
//append to page
  contAns.appendChild(item);
  item.appendChild(btn);
//add heading
//modify/add attributes
contQues.textContent = "What Button can you click to start the quiz? (zero credit for this one)"


}
// call start screen first
startScreen();
// need to keep a count of the question that is displayed
// need to keep score
// need to keep the time
function startTimer(){

}
function addQuestion(){

  var currentQ = 0;
  var quizQuestion = questionsList[0];

  contQues.textContent = quizQuestion.question;

//clear start button
  contAns.innerHTML = '';



 for(var i = 0; i < quizQuestion.answers.length; i++){
  console.log(quizQuestion.answers[i]);
   // create the question elements
   var item = document.createElement('li');
   var button = document.createElement('button');
  //modify
  button.setAttribute("class","option-button");
  button.textContent = button.textContent = quizQuestion.answers;
  button.dataset.index = currentQ;
  button.dataset.next = currentQ + 1;
  if(quizQuestion.answers[i] === quizQuestion.incorrect){
    button.dataset.value = "incorrect";
  }
  else{
    button.dataset.value = "correct";
  }
  var item = document.createElement("li");
  var btn = document.createElement("button");
    //append
    contAns.appendChild(item);
    item.appendChild(button);
 }
 

  // modify the text/attributes
  // modify one of the attributes to say right or wrong

  // append all elements to something on the page

  // for all the buttons, add event listener

}

function startQuiz(){
}

// eventListener here // when i click the start button
// for start
contAns.addEventListener("click", function(event){
  var child = event.target;
  console.log(child);

  if(child.matches("#start-button")){
    addQuestion();
  }
})