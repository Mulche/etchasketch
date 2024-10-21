const container = document.querySelector('.container');
const DEFAULT_GRID_SIZE = 16;
const CANVAS_SIZE = 960;

let gridSize = DEFAULT_GRID_SIZE;

// Create Grid

function createGrid() {
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.style.width = `${CANVAS_SIZE/gridSize}px`;
            box.style.height = `${CANVAS_SIZE/gridSize}px`;
            container.appendChild(box);
        }
    }
}

function clearGrid() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function(element) {
        element.remove();
    });
}



// Etch-A-Sketch functionality

function changeColor(element) {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = 'black'})
}


// Change Grid Size

const inputSize = document.querySelector('#inputSize');
const setButton = document.querySelector('#setButton');

function clickSetButton() {
    const inputValue = parseInt(inputSize.value);
    console.log(inputValue);
    if (!isNaN(inputValue)) {
        if (inputValue === gridSize) {
            return;
        }
        if (inputValue < 1 || inputValue > 100) {
            alert('Enter a number between 1-100!');
            return;
        }
        gridSize = inputValue;
        clearGrid();
        createGrid();
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(changeColor);
    }
}

setButton.addEventListener('click', clickSetButton);

createGrid();

const boxes = document.querySelectorAll('.box');
boxes.forEach(changeColor);