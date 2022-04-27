// Select color input
// Select size input
const userColor = document.getElementById("colorPicker");
const size = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

/**
 * Creates an empty grid.
 * clears canvas.
 * calls the colorCell function on each cell.
 * adds empty grid to canvas.
 */
function makeGrid() {
    canvas.innerHTML='';
    let tbl = document.createElement("tbody");
    for (let i = 0; i < height.value; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < width.value; j++) {
            const cell = document.createElement("td");
            cell.addEventListener("click", colorCell, false)
            row.appendChild(cell);
        };
        tbl.appendChild(row);
    };
    canvas.appendChild(tbl);
}

/**
 * Creates an empty grid.
 * @param {Event} grid canvas grid.
 */
function onSubmit(grid) {
    makeGrid();
    grid.preventDefault();
}

/**
 * Changes the color of cells in a grid.
 * @param {Event} e.
 */
function colorCell(e) {
    const color = userColor.value;
    e.currentTarget.style.backgroundColor = color;
}

/**
 * Initializes the program.
 */
size.addEventListener("submit", onSubmit);
