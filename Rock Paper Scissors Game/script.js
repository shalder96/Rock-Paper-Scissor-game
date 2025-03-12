const introDiv = document.querySelector('.intro');
const mainDiv = document.querySelector('.main');
const userSelect = document.querySelector('.userSelect');
const compSelect = document.querySelector('.compSelect');
const resultDeclaration = document.getElementById('resultDeclaration');
const userScoreSpan = document.getElementById('userScore');
const compScoreSpan = document.getElementById('compScore');

let userPoint = 0;
let compPoint = 0;

function innerDiv() {
  introDiv.classList.add('hidden');
  mainDiv.classList.remove('hidden');
}

function compGen() {
  const randNumber = Math.floor(Math.random() * 3) + 1;
  let compChoice;
  if(randNumber === 1) {
    compChoice = "rock";
    compSelect.innerHTML = '<img src="./assets/rock.png" alt="Rock" class="icon">';
  } else if(randNumber === 2) {
    compChoice = "paper";
    compSelect.innerHTML = '<img src="./assets/paper.png" alt="Paper" class="icon">';
  } else {
    compChoice = "scissor";
    compSelect.innerHTML = '<img src="./assets/scissor.png" alt="Scissor" class="icon">';
  }
  return compChoice;
}

function play(userChoice) {
  userSelect.innerHTML = `<img src="./assets/${userChoice}.png" alt="${userChoice}" class="icon">`;
  const compChoice = compGen();

  let result = '';
  if (userChoice === compChoice) {
    result = "It's a Draw 🎉";
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    result = "You Win! 🎉";
    userPoint++;
    userScoreSpan.textContent = userPoint;
  } else {
    result = "Computer Wins! 🎉";
    compPoint++;
    compScoreSpan.textContent = compPoint;
  }

  resultDeclaration.textContent = result;
  resultDeclaration.classList.add('show-result-text');

  setTimeout(() => {
    resultDeclaration.classList.remove('show-result-text');
  }, 3000);
}

function rock() {
  play('rock');
}
function paper() {
  play('paper');
}
function scissor() {
  play('scissor');
}

const resetBtn = document.querySelector('.rstBtn');
resetBtn.addEventListener('click', () => {
  userPoint = 0;
  compPoint = 0;
  userScoreSpan.textContent = userPoint;
  compScoreSpan.textContent = compPoint;
  userSelect.innerHTML = '';
  compSelect.innerHTML = '';
  resultDeclaration.textContent = '';
});
