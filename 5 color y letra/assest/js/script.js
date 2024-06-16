let currentColorKey = 'white';
let currentColorNewDiv = '';

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    

    if (event.key === 'a') {
        cambiarColorKey('pink');
    } else if (event.key === 's') {
        cambiarColorKey('orange');
    } else if (event.key === 'd') {
        cambiarColorKey('skyblue');
    } else if (event.key === 'q') {
        cambiarColorNuevoDiv('purple');
    } else if (event.key === 'w') {
        cambiarColorNuevoDiv('gray');
    } else if (event.key === 'e') {
        cambiarColorNuevoDiv('brown');
    }
});

function cambiarColorKey(color) {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
    currentColorKey = color;
}

function cambiarColorNuevoDiv(color) {
    let newDiv = document.getElementById('new-div');

    if (!newDiv) {
        newDiv = crearNuevoDiv(color);
    } else {
        newDiv.style.backgroundColor = color;
    }
}

function crearNuevoDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.id = 'new-div';
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '20px';
    
    document.body.appendChild(newDiv);
    return newDiv;
}
