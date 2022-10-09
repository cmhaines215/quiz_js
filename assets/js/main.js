// created questions as array of objects
var questions =[
  {
    q: "Question 1?",
    id: 1,
    answers: ["a1", "a2", "a3", "a4"],
    correct: "a3"
  },
  {
    q: "Question 2?",
    id: 2,
    answers: ["a1", "a2", "a3", "a4"],
    correct: "a1"    
  },
  {
    q: "Question 3?",
    id: 3,
    answers: ["a1", "a2", "a3", "a4"],
    correct: "a4"
  },
  {
    q: "Question 4?",
    id: 4,
    answers: ["a1", "a2", "a3", "a4"],
    correct: "a2"
  },
  {
    q: "Question 5?",
    id: 5,
    answers: ["a1", "a2", "a3", "a4"],
    correct: "a4"
  }
];

var currentQ = 0;
var ans = 0;
var containerAnswers = document.querySelector("#container-answers");
var containerQuestion = document.querySelector("container-question");

function startScreen(){
  var item = document.createElement("li");
  var btn = document.createElement("button");

  btn.textContent = "Start";
  btn.setAttribute("id", "start-button");
  // btn.style("margin-right", "30px");

  containerAnswers.appendChild(item);
  item.appendChild(btn);

}
function quizQuestions(){
  var question = questions[currentQ];
  containerQuestion.textContent = question.q;
  // clear area for answers
  containerAnswers.innerHTML = '';

  for(var i = 0; i < question.answers.length; i++){
    console.log(question.answers[i]);

    var item =document.createElement('li');
    var btn = document.createElement('button');

    btn.setAttribute("class","option-button");
    btn.textContent =question.answers[i];
    btn.dataset.index = currentQ;
    btn.dataset.next = currentQ + 1;

    if(question.answers === question.correct){
      btn.dataset.value = "correct";
    }
    else{
      btn.dataset.value = "incorrect";

    }
    containerAnswers.appendChild(item);
    item.appendChild(btn);
  }
}
// calling start screen function to the page first
startScreen();

containerAnswers.addEventListener("click", function(event){
  // console.log(ans);

  var child = event.target;
  console.log(child);

  if(child.matches("#start-button")){
    quizQuestions();
  }
  if(child.matches(".option-button")){
    if(child.dataset.next < questions.length){
      currentQ = parseInt(child.dataset.next);
      if(child.dataset.value !== "correct"){
        ans++;
      }
      quizQuestions();
    }
    else{
      if(child.dataset.value !== "correct"){
        ans++;
      }
      containerQuestion.textContent = "You got " + ans + "questions right, way to go.";
      // save to local storage
      containerAnswers.innerHTML = "";
    }
  }
})