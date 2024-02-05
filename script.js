"use strict";

let guessInput = document.querySelector(".guess__input");
let guessCheck = document.querySelector(".guess__check");
let guessText1 = document.querySelector(".guess__text1");
let guessText2 = document.querySelector(".guess__text2");
let guessText3 = document.querySelector(".guess__text3");
let guessAnswer = document.querySelector(".guess__answer");
let guess = document.querySelector(".guess");
let body = document.querySelector("body");
let guessScore = document.querySelector(".guess__score");
let guessHighScore = document.querySelector(".guess__highscore");
let guessRefresh = document.querySelector(".guess__refresh");
let lose = document.querySelector(".lose");
lose.style.display = "none";

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;

function scoreOutput(content) {
  if (score > 0) {
    guessText1.textContent = content;
    score--;
    guessScore.textContent = score;
  } else {
    guess.style.display = "none";
    lose.style.display = "flex";
  }
}

// game logic

guessCheck.addEventListener("click", function () {
  let inputForGuess = Number(guessInput.value);

  if (!inputForGuess) {
    guessText1.textContent = "input a number";
    guessText1.style.color = "purple";
  } else if (inputForGuess == randomNumber) {
    guessAnswer.textContent = randomNumber;
    body.style.backgroundColor = "#431D5A";
    guessText1.textContent = "you got the correct number 🙌🏼";
    guessText1.style.color = "yellow";
    guessHighScore.textContent = score + "😏";
  } else if (inputForGuess > randomNumber) {
    scoreOutput("you're guessing too high 😡");
  } else if (inputForGuess < randomNumber) {
    scoreOutput(" you're guessing too low 😔");
  }
});

// refresh logic
guessRefresh.addEventListener("click", () => {
  score = 20;
  guessScore.textContent = score;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  guessAnswer.textContent = "?";
  guessText1.textContent = "start guessing...";
  guessText1.style.color = "white";
  body.style.backgroundColor = "black";
  guessInput.value = "";
});
