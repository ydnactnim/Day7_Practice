const up = document.querySelector(".up");
const down = document.querySelector(".down");
const score = document.querySelector(".score");

function upEvent() {
  score.innerText = parseInt(score.innerText) + 1;
}

function downEvent() {
  if (score.innerText > 0) score.innerText = parseInt(score.innerText) - 1;
  else {
    score.classList.add("not_zero");
    setTimeout(() => {
      score.classList.remove("not_zero");
    }, 1000);
  }
}

up.addEventListener("click", upEvent);
down.addEventListener("click", downEvent);
