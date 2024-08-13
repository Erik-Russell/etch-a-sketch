const grid = document.querySelector('.grid-container');


for (let index = 0; index < 16; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}

let squares = document.querySelectorAll('.square');
for (const square of squares) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'green';
    });
}