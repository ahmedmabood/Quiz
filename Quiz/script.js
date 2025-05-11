
const quiz = [
  {
    question: "What does HTML stand for?",
    answer: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correct_answer: "Hyper Text Markup Language"
  },
  {
    question: "Which attribute is used to specify a unique identifier for an HTML element?",
    answer: ["class", "id", "style", "name"],
    correct_answer: "id"
  },
  {
    question: "Which property is used in CSS to change the background color?",
    answer: ["color", "bgcolor", "background-color", "background"],
    correct_answer: "background-color"
  },
  {
    question: "Which method is used to parse a string to an integer in JavaScript?",
    answer: [
      "parseInt()",
      "parseFloat()",
      "Number()",
      "Math.floor()"
    ],
    correct_answer: "parseInt()"
  },
  {
    question: "Which CSS property controls the text size?",
    answer: ["font-style", "text-size", "font-size", "text-style"],
    correct_answer: "font-size"
  },
  {
    question: "How do you create a function in JavaScript?",
    answer: [
      "function:myFunction()",
      "function myFunction()",
      "function = myFunction()",
      "create function myFunction()"
    ],
    correct_answer: "function myFunction()"
  },
  {
    question: "Which attribute is used to define inline styles in HTML?",
    answer: ["style", "class", "font", "styles"],
    correct_answer: "style"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    answer: ["fgcolor", "color", "text-color", "font-color"],
    correct_answer: "color"
  },
  {
    question: "How do you add a background color in CSS?",
    answer: ["background-color", "bg-color", "color", "background"],
    correct_answer: "background-color"
  },
  {
    question: "Which method is used to select an element by its id in JavaScript?",
    answer: [
      "document.querySelector()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.getElementByTagName()"
    ],
    correct_answer: "document.getElementById()"
  },
  {
    question: "Which HTML element is used to create a text input field?",
    answer: ["input", "textarea", "button", "form"],
    correct_answer: "input"
  },

  {
    question: "Which method is used to round a number to the nearest integer in JavaScript?",
    answer: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.random()"],
    correct_answer: "Math.round()"
  },
  {
    question: "What is the correct way to reference an external CSS file in HTML?",
    answer: ["link", "script", "style", "rel"],
    correct_answer: "link"
  },

  {
    question: "Which CSS property is used to change the font of an element?",
    answer: ["font-weight", "font-style", "font-family", "font"],
    correct_answer: "font-family"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: ["onchange", "onmouseover", "onmouseclick", "onclick"],
    correct_answer: "onclick"
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    answer: ["push()", "pop()", "shift()", "unshift()"],
    correct_answer: "push()"
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    answer: ["var", "let", "const", "All of the above"],
    correct_answer: "All of the above"
  },
  {
    question: "How do you select an element with id 'header' in CSS?",
    answer: ["#header", ".header", "header", "*header"],
    correct_answer: "#header"
  },
  {
    question: "Which property is used to change the left margin of an element in CSS?",
    answer: ["margin-left", "padding-left", "left-margin", "indent"],
    correct_answer: "margin-left"
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    answer: [
      "msg('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');"
    ],
    correct_answer: "alert('Hello World');"
  }
];





let options = document.getElementById('options');
let quest = document.getElementById('question');
let time = document.getElementById('time')
let next = document.getElementById('button');
let box = document.querySelector('.box')
let option_box = document.getElementById('options-box')
let score = 0;
let currentQuestion = null;
let currentCorrectAnswer = null;
let question_no = 1
let count = 0
// let time_increase=0

function displayQuestion() {
  if (question_no <= 20) {
    let randomIndex = Math.floor(Math.random() * quiz.length);
    currentQuestion = quiz[randomIndex];
    currentCorrectAnswer = currentQuestion.correct_answer.trim().toLowerCase();
    quest.innerHTML = `<p>${question_no}.${currentQuestion.question}</p>`;
    removePreviousOptions();
    displayOption(currentQuestion);
    quiz.splice(randomIndex, 1);
  }
  if (question_no === 20) {
    next.remove()
    show = document.createElement('div')
    show.id = 'show-score'
    show.innerHTML = ` <button type="button" id="button">Show score</button>`
    box.append(show)
    show.addEventListener('click', (display_score))

  }
  question_no++
}

function displayOption(question) {
  let array_options = question.answer;
  array_options.forEach(item => {
    options.innerHTML += `
            <div id="option">
                <input type="radio" name="option" id="${item}" value="${item}">
                <label for="${item}">${item}</label>
            </div>
            <br>`;
  });
}

function removePreviousOptions() {
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}
let timerInterval;

function display_time() {
  time_increase = 0;

  timerInterval = setInterval(() => {
    if (time_increase <= 10) {
      time.innerHTML = `<p>${time_increase}</p>`;
      time_increase++;
      console.log(question_no);
    } else {
      time_increase = 0;
      if (question_no != 21) {
        displayQuestion();
      } else {
        display_score()
      }
    }
  }, 1000);
}

function display_score() {
  time.remove()
  option_box.remove()
  show.remove()
  quest.classList = 'final'
  quest.id = ''
  quest.parentElement.classList = 'final-box'
  quest.innerHTML = `<p>your score is ${score}</p>`
}


options.addEventListener('click', (e) => {
  let user_answer = e.target.innerText.trim().toLowerCase();
  if (user_answer === currentCorrectAnswer) {
    score++;
    console.log(score);
  }
});

next.addEventListener('click', () => {
  displayQuestion()
  clearInterval(timerInterval)
  display_time()

});
display_time()
displayQuestion();





