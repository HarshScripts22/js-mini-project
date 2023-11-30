let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const input = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remain = document.querySelector(".lastremain");
const lowHigh = document.querySelector(".lowHigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validation(guess);
  });
}

function validation(guess) {
  if (isNaN(guess)) {
    alert("please enter valid number");
  } else if (guess < 1) {
    alert("Please enter number greater than 1");
  } else if (guess > 100) {
    alert("Please enter number smaller than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      operationGuess(guess);
      displayMsg(`GAME OVER... Random no was ${randomNum}`);
      endGame();
    } else {
      operationGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(
      "Toh aap yahaan baith kar 7 crore rupaye jeetne waale hain. Lock kiya jaaye?"
    );
    displayMsg(
      "7crore!!! jeetgye h aap. Aapne toh poore saal bhar ka budget jeet liya! Ab ghar jaakar dosto ko bataiye, woh aapka fan ho jayega!"
    );
    endGame();
  } else if (guess > randomNum) {
    displayMsg("Number high ho rkha h apki ex tarah");
  } else if (guess < randomNum) {
    displayMsg("itna chota number choti bachi ho kya!!");
  }
}

function operationGuess(guess) {
  input.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remain.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remain.innerHTML = `${11 - numGuess}`;
    input.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
