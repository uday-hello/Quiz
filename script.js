const quizData = [
  {
    question:"1.Which language runs in a web browser?",
       a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "2.What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3.Suppose we have a text "human" that we want to convert into string without using the "new" operator. Which is the correct way from the following to do so:",
        a: "toString()",
        b: "String(human)",
        c: "String newvariable="human"",
        d: "Both human.toString() and String(human)",
        correct: "d",
    },
    {
        question: "4.Which of the following one is the property of the primary expression:",
        a: "Contains only keywords",
        b: "basic expressions containing all necessary functions",
        c: "contains variable references alone",
        d: "stand-alone expressions",
        correct: "d",
    },
    {
        question: "5.Which one of the following is an ternary operator:",
        a: "?",
        b: ":",
        c: "-",
        d: "+",
        correct: "a",
    },
    {
        question: "6.What are the three important manipulations for a loop on a loop variable?",
        a: "Updation, Incrementation, Initialization",
        b: "Initialization, Testing, Incrementation",
        c: "Testing, Updation, Testing",
        d: "Initialization, Testing, Updation",
        correct: "d",
    },
    {
        question: "7.Which of the following tag is used to define options in a drop-down selection list?",
        a: "<select>",
        b: "<list>",
        c: "<dropdown>",
        d: "<option>",
        correct: "d",
    },
    {
        question: "8.The CSS property which is used to set the text wider or narrower compare to the default width of the font is -",
        a: "font-stretch property",
        b: "font-weight property",
        c: "text-transform property",
        d: "font-variant property",
        correct: "a",
    },
    {
        question: "9.What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },  
    {
        question: "10.What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let score = 0;
let currentQuestion = 0;

function loadQuestion(){
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question ; 

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
  answerEls.forEach(answerEl=> answerEl.checked=false);
}

function getSelected(){
  let answer;
  answerEls.forEach(answerEl => {
    if(answerEl.checked){
      answer = answerEl.id ;
    }
  })
  console.log(answer);
  return answer;
}

loadQuestion();

submitBtn.addEventListener("click", ()=>{
  const answer = getSelected();
  if(answer){
    if(answer===quizData[currentQuestion].correct){
      score++;
    }
    currentQuestion++
    if(currentQuestion<quizData.length){
      loadQuestion();
    }
    else{
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly
</h2>
<button onclick="location.reload()">Reload</button>
    `;
    }
    
  }
});
