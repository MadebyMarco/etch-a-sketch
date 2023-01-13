let gridContainer = document.querySelector('.grid-container');

function createGrid(number) {
    number = prompt('Enter a number greater than 16 but less than 100', 16);
    for(i = 0; i < number; i++) {
        gridContainer.appendChild(document.createElement('div'));
};
};