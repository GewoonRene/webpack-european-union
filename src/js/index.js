// Imports
import '../scss/main.scss';

// Variables
let goodImg, goodImgContainer, badImg, badImgContainer;

// init
init();
function init() {
    
}

// Event Handlers
window.onresize = () => {
    goodImg = document.getElementById('goodEU');
    goodImgContainer = document.getElementById('left');

    goodImg.style.width = window.innerWidth + 'px';
    goodImgContainer.style.width = window.innerWidth / 2 + 'px';
};