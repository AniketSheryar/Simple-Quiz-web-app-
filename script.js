const questions = [
  {
    question: "Which of the following is an erosional landfrom by sea wave?",
    answer: [
      { text: "Stacks", correct: true },
      { text: "Natural Levee", correct: false },
      { text: "Loess", correct: false },
      { text: "Duve", correct: false },
    ],
  },
  {
    question: "Which of the following bodies separate Sri Lanka from India?",
    answer: [
      { text: "Palk strait", correct: true },
      { text: "Devis strait", correct: false },
      { text: "Gulf of Khambhat", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following state of India experience highest sex ratio in 2011 census?",
    answer: [
      { text: "Kerala", correct: true },
      { text: "Haryana", correct: false },
      { text: "Goa", correct: false },
      { text: "Uttar Pardesh", correct: false },
    ],
  },
  {
    question: "Plate movement can be resulted into",
    answer: [
      { text: "Earthquake", correct: true },
      { text: "flood", correct: false },
      { text: "Drought", correct: false },
      { text: "Disease", correct: false },
    ],
  },
  {
    question: "In which state is the Flamingo festival celebrated?",
    answer: [
      { text: "Rajasthan", correct: false },
      { text: "Asssam", correct: false },
      { text: "Manipur", correct: false },
      { text: "Andhra Pradesh", correct: true },
    ],
  },
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
function resetState() {
  nextBtn.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if (isCorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You have scored ${score} out of ${questions.length}.`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
