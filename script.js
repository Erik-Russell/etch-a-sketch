const grid = document.querySelector('.grid-container');


for (let index = 0; index < 16; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = 'testing';
    grid.appendChild(square);
}