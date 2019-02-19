import '../scss/main.scss';

// Variables
let movement = document.getElementById('center')
let imgComponent = document.getElementById('goodEU');
let imgContainer = document.getElementById('left');


// Event Handlers
window.onresize = () => {
    // Changes the width to the center of the device width
    imgComponent.style.width = window.innerWidth + 'px';
    imgContainer.style.width = window.innerWidth / 2 + 'px';
};

movement.ondrag = event => {
    // Changes the width value on drag event
    imgContainer.style.width = event.clientX + document.body.scrollLeft + 'px';
    movement.style.left = event.clientX + document.body.scrollLeft + 'px';
}

movement.ondragend = event => {
    // Maintain changes of the width when stopped dragging
    imgContainer.style.width = event.clientX + document.body.scrollLeft + 'px';
    movement.style.left = event.clientX + document.body.scrollLeft + 'px';
}