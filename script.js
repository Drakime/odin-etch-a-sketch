let grid = document.getElementById("grid");

// Create and add 16 * 16 squares to the grid
for (let i = 0; i < (16 * 16); i++) {
  let gridSquare = document.createElement("div");
  gridSquare.classList.add("gridSquare");

  grid.append(gridSquare);
}