import '../scss/main.scss';

// Variables
let imgComponent = document.getElementById('goodEU');
let imgContainer = document.getElementById('left');

// init
init();
function init() {
    
}

// Event Handlers
window.onresize = () => {
    imgComponent.style.width = window.innerWidth + 'px';
    imgContainer.style.width = window.innerWidth / 2 + 'px';
};

window.ondrag = (event) => {
    // Changes the width value on drag event
    imgContainer.style.width = event.clientX + document.body.scrollLeft + 'px';
}

window.ondragend = (event) => {
    // Maintain changes of the width when stopped dragging
    imgContainer.style.width = event.clientX + document.body.scrollLeft + 'px';
}

