let counter = 0;
const cells = document.querySelectorAll("#table td");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn");

btn.addEventListener("click", startGame);

let totalX = 0;
let totalO = 0;
let totalDraw = 0;

let totalGame = 0;

const playerX = document.querySelector(".playerx");
const playerO = document.querySelector(".playero");
const draw = document.querySelector(".draw");
const total = document.querySelector(".total");

function isVictory() {
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combo of combos) {
    if (
      cells[combo[0]].innerHTML == cells[combo[1]].innerHTML &&
      cells[combo[1]].innerHTML == cells[combo[2]].innerHTML &&
      cells[combo[0]].innerHTML != ""
    ) {
      return true;
    }
  }
  return false;
}

function tap(e) {
  if (counter % 2 == 0) {
    e.target.innerHTML =
      '<img src= "./images/cross7.png" width=140  background-color="white">';
  } else {
    e.target.innerHTML =
      '<img src= "./images/zero7.png" width=140 background-color="white">';
  }

  if (isVictory()) {
    for (let cell of cells) {
      cell.removeEventListener("click", tap);
    }
    if (counter % 2 === 0) {
      title.textContent = "Player X winner!";
      // console.log((playerX += 1));
      playerX.textContent = totalX += 1;
      // total += playerxx.innerText;
    } else {
      title.textContent = "Player O winner!";
      playerO.textContent = totalO += 1;
    }
  } else if (counter === 8) {
    title.innerText = "Draw!";
    draw.textContent = totalDraw += 1;
  }

  // totalGame = totalX + totalO + totalDraw;
  total.textContent = totalX + totalO + totalDraw;

  counter++;
  e.target.removeEventListener("click", tap);
}

function startGame() {
  title.textContent = "Tic Tac Toe";
  counter = 0;

  for (let cell of cells) {
    cell.innerHTML = "";
    cell.addEventListener("click", tap);
  }
}

startGame();
