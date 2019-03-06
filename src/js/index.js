import '../scss/main.scss';
import './utils/cursor';
import './utils/assets';
// Importss

// Variables
const leftContainer = document.getElementById('left');
const rightContainer = document.getElementById('right');

window.addEventListener('mousemove', event => {
    leftContainer.style.width = event.clientX + document.body.scrollLeft + 'px';
});
