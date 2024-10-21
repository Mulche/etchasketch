const container = document.querySelector('.container');
const DEFAULT_GRID_SIZE = 16;
const CANVAS_SIZE = 400;

let gridSize = DEFAULT_GRID_SIZE;

let drawingMode = true;

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
    if (drawingMode) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'rgb(64, 65, 64)';
        })
    }
}

// function changeColor(element) {
//     element.addEventListener('mouseover', () => {
//         element.style.backgroundColor = 'rgb(64, 65, 64)';
//         // element.style.opacity += 0.1;
//     })
// }

function toggleDrawingMode(element) {
    element.addEventListener('click', () => {
        drawingMode = !drawingMode;
        console.log('test' + drawingMode);
    })
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
        if (inputValue < 2 || inputValue > 100) {
            alert('Enter a number between 2-100!');
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


boxes.forEach(toggleDrawingMode);

boxes.forEach(changeColor);


// TODO:
// Add ability to toggle drawing mode (need to fix the way the drawingMode flag works)
// Add functionality to gradually increase opaqueness with each pass over
// Fix page sizing and grid shrinking/growing
// Organize code