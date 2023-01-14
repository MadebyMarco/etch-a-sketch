const gridContainer = document.querySelector('.grid-container');
function createGrid(number) {
    number = prompt('Enter a number greater than 16 but less than 100', 16);
    for(i = 0; i < number; i++) {
    let gridSquare = gridContainer.appendChild(document.createElement('div'));
    gridSquare.classList.add('gridSquare');
    gridSquare.textContent = i + 1;
    
};
const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(square => square.addEventListener('mouseover', () => {
this.classList.add('hover');
}));
};



/** How do we recognize the mouse is hovering? Need an event listener on each square for hover
 * How do we change the color? Add class
 * How will it revery back to normal color? Remove class
 * How will it know to remove class? Event listener*hover effect 
 
 * 
 * 
*/