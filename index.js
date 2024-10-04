let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
};

const inputBox = document.querySelector(".js-guess");

const checkBtn = document.querySelector(".js-check-btn");

const checkBox = document.querySelector(".js-box-check");

const scoreHTML = document.querySelector(".js-score");

const message = document.querySelector(".js-message");

const reset = document.querySelector(".js-again-btn");

checkBtn.addEventListener("click", () => {
  renderGame();
});

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    renderGame();
  }
});

function renderGame() {
  const randomNumber = Math.floor(Math.random() * 6);

  let input = Number(inputBox.value);

  if (input === randomNumber) {
    result = "win";
    // console.log("win");
    // console.log(`randomnumber ${randomNumber}`);
  } else {
    result = "lose";
    // console.log("lose");
    // console.log(`randomNumber ${randomNumber}`);
  }

  if (result === "win") {
    score.wins += 1;
    message.innerHTML = "Good guess!";
  } else if (result === "lose") {
    score.wins += 0;
    message.innerHTML = "Try again";
  }

  localStorage.setItem("score", JSON.stringify(score));

  scoreHTML.innerHTML = `Score: ${score.wins}`;

  checkBox.innerHTML = `<p class="result-box">${randomNumber}</p>`;
}

reset.addEventListener("click", () => {
  score.wins = 0;
  localStorage.removeItem("score");
  scoreHTML.innerHTML = `score: ${score.wins}`;
  message.innerHTML = "START GUESSING...";
});
