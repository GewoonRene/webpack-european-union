import '../scss/main.scss';
import './cursor';
// Importss

// Variables
const panelEl = document.getElementById('left');

// Event Handlers
window.addEventListener('mousemove', event => {
    // Panel follows mouse
    panelEl.style.width = event.clientX + document.body.scrollLeft + 'px';

});

