const gridContainer = document.querySelector('.grid-container');
let counter = 0;
let oppacity = 10;

function createGrid(number) {

    number = prompt('Enter the number of squares per side for the new grid', 4);
    /** 
    for(i = 0; i < number; i++) {
    let gridSquare = gridContainer.appendChild(document.createElement('div'));
    gridSquare.classList.add('gridSquare');
    gridSquare.textContent = i + 1;
    };
*/
    //creates grid squares, gives it a number and class
    //!!! ^^^^ old code but here for historical reference ^^^^
    let gridSize = 1000 / number;

    for(let rowCounter = 0; rowCounter  < number; rowCounter ++) {
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    gridContainer.appendChild(rowContainer);
    //creates rows
    for(i = 0; i < number; i++) {
        let gridSquare = rowContainer.appendChild(document.createElement('div'));
        gridSquare.classList.add('gridSquare');
        gridSquare.style.height = `${gridSize}px`;
        gridSquare.style.width = `${gridSize}px`;
        //gridSquare.textContent = i + 1;
        };
    };

const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
}));
//adds a class of hover to a square thats hovered on

counter++;
};

const newGridButton = document.querySelector('button');

newGridButton.addEventListener('click', () => {

    if (counter > 0) {
        const gridSquares = document.querySelectorAll('.gridSquare');
        gridSquares.forEach(square => square.remove());

        const rows = document.querySelectorAll('.row');
        rows.forEach(row => row.remove());
    }
    //the counter prevents the 1st grid from being wiped, the rest removes the previous grids
    createGrid();
   
    
});

//grid ideas

//Ideas 1: take number, create a new div inside of gridContainer with rows.length = number,
// repeat this step in a for loop with i < number, giving us an even grid


//Problem: Need gridSquares to size dynamically. 