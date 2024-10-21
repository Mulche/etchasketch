// Grid creation/deletion

function createGrid() {
  for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = `${CANVAS_SIZE / gridSize}px`;
      box.style.height = `${CANVAS_SIZE / gridSize}px`;
      container.appendChild(box);
    }
  }
}

function clearGrid() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function (element) {
    element.remove();
  });
}

// Drawing functions

function changeColor(element) {
  const handleMouseOver = () => {
    element.style.backgroundColor = 'rgb(64, 65, 64)';
  };
  if (drawingMode) {
    element.addEventListener('mouseover', handleMouseOver);
  } else {
    element.removeEventListener('mouseover', handleMouseOver);
  }
}

function toggleDrawingMode(element) {
  element.addEventListener('click', () => {
    drawingMode = !drawingMode;
    console.log('drawing mode: ' + drawingMode);
    boxes.forEach(changeColor);
  });
}

// Functions for setting grid size

function handleSubmit(e) {
  if (e.type === 'keydown' && e.code === 'Enter') {
    processInput();
  }
  if (e.type === 'click') {
    processInput();
  }

  function processInput() {
    const inputValue = parseInt(inputSize.value);
    if (!isNaN(inputValue)) {
      if (inputValue === gridSize) {
        return;
      }
      if (inputValue < 2 || inputValue > 100) {
        alert('Enter a number between 2-100!');
        return;
      }
      inputSize.value = '';
      gridSize = inputValue;
      clearGrid();
      createGrid();
      const boxes = document.querySelectorAll('.box');
      boxes.forEach(changeColor);
      inputSize.blur();
    }
  }
}

// Initialize variables and references

const container = document.querySelector('.container');
const DEFAULT_GRID_SIZE = 16;
const CANVAS_SIZE = 400;

let gridSize = DEFAULT_GRID_SIZE;

let drawingMode = true;

const inputSize = document.querySelector('#inputSize');
inputSize.addEventListener('keydown', handleSubmit);
const setButton = document.querySelector('#setButton');
setButton.addEventListener('click', handleSubmit);

// Create initial grid

createGrid();
const boxes = document.querySelectorAll('.box');
boxes.forEach(toggleDrawingMode);

boxes.forEach(changeColor);
