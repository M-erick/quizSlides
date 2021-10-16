const quizData = [
  {
    question: "how old is Florin",
    a: "10",
    b: "17",
    c: "26",
    d: "12",
    correct: "c",
  },
  {
    question: "Most used programming language",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "who is the president of US",
    a: "Donald",
    b: "Florin",
    c: "eric",
    d: "minaj",
    correct: "a",
  },
  {
    question: "what does html stand for :",
    a: "Hypertext markup Language",
    b: "css",
    c: "jss",
    d: "jason markup language",
    correct: "a",
  },
  {
    question: "what year was javascript launched:",
    a: "2020",
    b: "1995",
    c: "1994",
    d: "1996",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");



/*
difference between innerText and innerHtml
innerText returns text without an inner element tag while innerHTML
returns a tag with an inner element tag
*/


let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;

  c_text.innerText = currentQuizData.c;

  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
     answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
       
      });

}

submitbtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
      if (answer == quizData[currentQuiz].correct) {
          score++;
          
      }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
        quiz.innerHTML = `
        <h2> You answered correctly at
         ${score}/${quizData.length}
         questions.</h2>

         <button onclick ="location.reload()">Reload</button>`;
    }
  }
});
