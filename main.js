let counter = 0;
const cells = document.querySelectorAll("#table td");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
const step = document.querySelector(".step");
// const imgActive = document.querySelector("#td img");

// imgActive.addEventListener("click", (e) => {
//   if (e.target === 3) {
//     imgActive.classList.add("img-active");
//   }
// });

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
      cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
      cells[combo[1]].innerHTML === cells[combo[2]].innerHTML &&
      cells[combo[0]].innerHTML !== ""
    ) {
      return true;
    }
  }
  return false;
}

function tap(e) {
  if (counter % 2 === 0) {
    e.target.innerHTML =
      // '<img src= "./images/cross-svg.svg" width=140"> <audio src="./music/melody4.mp3" autoplay preload="auto"></audio>';
      '<svg class="icon" width="100" height="100"><use href="./images/sprite.svg#icon-close_thick_icon_137749"></use></svg> <audio src="./music/melody4.mp3" autoplay preload="auto"></audio>';
    // imgActive.classList.add("img-active");
  } else {
    e.target.innerHTML =
      '<svg class="icon2" width="100" height="100"><use href="./images/sprite.svg#icon-circle_shape_icon_214058-1"></use></svg> <audio src="./music/melody4.mp3" autoplay preload="auto"></audio>';
  }

  if (isVictory()) {
    for (let cell of cells) {
      cell.removeEventListener("click", tap);
      // e.target.innerHTML =
      //   '<audio src="./music/winner.mp3" autoplay preload="auto"></audio>';
    }
    if (counter % 2 === 0) {
      title.innerHTML =
        'Player X winner! <audio src="./music/player0.mp3" autoplay preload="auto"></audio>';
      // title.innerHTML =
      //   '<audio src="./music/winner.mp3" autoplay preload="auto"></audio>';
      playerX.textContent = totalX += 1;
      btn.classList.add("btn__active");
      step.classList.add("step__none");
      // total += playerxx.innerText;
      // e.target.innerHTML =
      //   '<audio src="./music/winner.mp3" autoplay preload="auto"></audio>';
    } else {
      title.innerHTML =
        'Player O winner! <audio src="./music/player0.mp3" autoplay preload="auto"></audio>';
      playerO.textContent = totalO += 1;
      btn.classList.add("btn__active");
    }
  } else if (counter === 8) {
    title.innerHTML =
      'Draw! <audio src="./music/draw1.mp3" autoplay preload="auto"></audio>';
    draw.textContent = totalDraw += 1;
    btn.classList.add("btn__active");
  }

  // totalGame = totalX + totalO + totalDraw;
  total.textContent = totalX + totalO + totalDraw;

  counter++;
  e.target.removeEventListener("click", tap);
}

const colorsGame = () => {
  const colors = [
    "#a8b1db",
    "#855d4f",
    "#529873",
    "#b7ded2",
    "#fbe8cb",
    "#33007b",
    "#00ffa5",
    "#a8b1db",
    "#ffd700",
    "#69b4ff",
    "#ff4c4c",
    "#855d4f",
    "#73607d",
  ];
  const max = colors.length - 1;
  const min = 0;

  const index = Math.round(Math.random() * (max - min) + min);

  const color = colors[index];

  document.body.style.backgroundColor = color;
};

function startGame() {
  title.innerHTML =
    'Tic Tac Toe <audio src="./music/start2.mp3" autoplay preload="auto"></audio>';
  counter = 0;
  btn.classList.remove("btn__active");
  // colorsGame();
  btn.addEventListener("click", colorsGame());

  for (let cell of cells) {
    cell.innerHTML = "";
    cell.addEventListener("click", tap);
  }
}

startGame();
