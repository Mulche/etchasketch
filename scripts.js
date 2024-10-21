const container = document.querySelector('.container');
const DEFAULT_BOX_SIZE = 16;
const CANVAS_SIZE = 960;

let boxSize = DEFAULT_BOX_SIZE;

for (i = 0; i < boxSize; i++) {
    for (j = 0; j < boxSize; j++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.width = `${CANVAS_SIZE/DEFAULT_BOX_SIZE}px`;
        box.style.height = `${CANVAS_SIZE/DEFAULT_BOX_SIZE}px`;
        container.appendChild(box);
    }
}


function changeColor(element) {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = 'black'})
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(changeColor);