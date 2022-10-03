var ans = [];
var contAns =document.querySelector("#container-answers");
var contQues =document.querySelector("#container-question");

// need a collection of objects that hold the questions
var questionslist = [{
  question:"question1?",
  answers:"answers1",
  correctanswer:"correctanswer1",
},
{
  question:"question2?",
  answers:"answers2",
  correctanswer:"correctanswer2",
},
{
  question:"question3?",
  answers:"answers3",
  correctanswer:"correctanswer3",
},
{
  question:"question4?",
  answers:"answers4",
  correctanswer:"correctanswer4",
},
{
  question:"question5?",
  answers:"answers5",
  correctanswer:"correctanswer5",
}];


function startScreen(){
  // starts at zero
  ans = [];
// create
  var item = document.createElement("li");
  var btn = document.createElement("button");
//modify/add attributes
  btn.textContent = "start";
//append to page
  contAns.appendChild(item);
  item.appendChild(btn);
//add heading
//modify/add attributes
contQues.textContent = "What Button can you click to start the quiz? (zero credit for this one)"
//append to page

}
// call start screen first
startScreen();
// need to keep a count of the question that is displayed
// need to keep score
// need to keep the time


function startTimer(){

}
function addQuestion(){

 
  // create the question elements

  // modify the text/attributes
  // modify one of the attributes to say right or wrong

  // append all elements to something on the page

  // for all the buttons, add event listener

}

function startQuiz(){
}

// eventListener here // when i click the start button
// for start
