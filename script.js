const grid = document.querySelector('.grid-container');

let squaresPerSide = 4;
let gridSize = squaresPerSide ** 2;
let gridLength = 80 / Math.floor(Math.sqrt(gridSize));
let width = `1 1 ${gridLength}vw`;
let height = `${gridLength}vw`;

let newButton = document.querySelector('.new');
newButton.addEventListener('click', () => {
    let input = document.querySelector('#grid-size');
    squaresPerSide = Math.min(input.value, 100);
    gridSize = squaresPerSide ** 2;
    clearGrid();
    drawGrid(gridSize);

});

function drawGrid(numberOfSquares) {
    for (let index = 0; index < numberOfSquares; index++) {
        gridLength = 85 / Math.floor(Math.sqrt(numberOfSquares));
        width = `0 1 ${gridLength}vw`;
        height = `${gridLength}vw`;

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = width;
        square.style.height = height;
        grid.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'green';
        });
    };
    console.log('drawGrid');
}

function clearGrid() {
    let squares = document.querySelectorAll('.square');
    for (const square of squares) {
        grid.removeChild(square);
    };
    console.log('clearGrid');
}


drawGrid(gridSize);