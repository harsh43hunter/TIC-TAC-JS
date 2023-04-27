
const cells = document.querySelectorAll("td");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (event) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      checkWinner();
      switchPlayer();
    }
  });
}

function checkWinner() {
  const combinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
