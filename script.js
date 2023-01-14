const gridContainer = document.querySelector('.grid-container');
let counter = 0;
function createGrid(number) {

    number = prompt('Enter a number greater than 16 but less than 100', 16);

    for(i = 0; i < number; i++) {
    let gridSquare = gridContainer.appendChild(document.createElement('div'));
    gridSquare.classList.add('gridSquare');
    gridSquare.textContent = i + 1;
    };

const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
}));
counter++;
};

const newGridButton = document.querySelector('button');

newGridButton.addEventListener('click', () => {

    if (counter > 0) {
        const gridSquares = document.querySelectorAll('.gridSquare');
        gridSquares.forEach(square => square.remove());
    }
    createGrid();
   
    
});