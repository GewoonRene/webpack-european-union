
// Variables
let lastPos = [ [0, 0] ];
let trailStarted = false;
let lastEvent = 0;

// Functions
let updateTrail = positions => {
    positions.forEach((e, i) => {
        document.getElementById('trail' + (i + 1)).style.left = e[0] + 'px';
        document.getElementById('trail' + (i + 1)).style.top = e[1] + 'px';
    });
};

let renderTrail = e => {
    lastPos.push([e.clientX, e.clientY]);

    if (lastPos.length > 10) {
        lastPos.shift();
    } updateTrail(lastPos);

    requestAnimationFrame(() => {
        renderTrail(lastEvent)
    });

};

// Event Handlers
document.addEventListener('mousemove', e => {
    lastEvent = e;
    if (!trailStarted) {
      renderTrail(e);
      trailStarted = true;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i < 11; i++) {
        let cursorTrail = document.createElement('div');
        cursorTrail.id = 'trail' + i;
        cursorTrail.classList.add('cursor');
        document.body.appendChild(cursorTrail);
    }
});