let grid = document.getElementById("grid");

function createGrid() {
  // Create and add 16 * 16 squares to the grid
  for (let i = 0; i < (16 * 16); i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");

    grid.append(gridSquare);
  }
}

function addGridSquareEventListeners() {
  const squares = document.querySelectorAll(".gridSquare");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
    })
  })
}

function initialiseGrid() {
  createGrid();
  addGridSquareEventListeners();
}

document.addEventListener('DOMContentLoaded', initialiseGrid);