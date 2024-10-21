// Grid creation/deletion

function createGrid() {
  for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = `${CANVAS_SIZE / gridSize}px`;
      box.style.height = `${CANVAS_SIZE / gridSize}px`;
      box.style.backgroundColor = 'rgb(190, 190, 190)';
      box.style.opacity = '1';
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
  function handleMouseOver() {
    element.style.backgroundColor = 'black';
    if (element.style.opacity === '1') {
      // Default opacity reset to 0.11 (rather than 0.1) to prevent opacity from resetting again when it reaches max opacity
      element.style.opacity = '0.11';
    } else {
      let newOpacity = parseFloat(element.style.opacity) + 0.2;
      element.style.opacity = `${newOpacity}`;
    }
  }
  element.addEventListener('mouseover', handleMouseOver);
  //   if (!drawingMode) {
  //     return;
  //   } else {
  //     element.addEventListener('mouseover', handleMouseOver);
  //   }
}

// function toggleDrawingMode(element) {
//   element.addEventListener('click', () => {
//     drawingMode = !drawingMode;
//   });
// }

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
      size.textContent = `Current Size: ${inputValue}x${inputValue}`;
      clearGrid();
      createGrid();
      boxes = document.querySelectorAll('.box');
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
const size = document.querySelector('.size');
let boxes;

// let drawingMode = true;

const inputSize = document.querySelector('#inputSize');
inputSize.addEventListener('keydown', handleSubmit);
const setButton = document.querySelector('#setButton');
setButton.addEventListener('click', handleSubmit);

// Create initial grid

createGrid();
boxes = document.querySelectorAll('.box');
// boxes.forEach(toggleDrawingMode);
boxes.forEach(changeColor);
