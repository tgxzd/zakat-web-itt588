function changeColor(color) {
    // Select all text elements
    const textElements = document.querySelectorAll('body, body *');
    // Iterate over each element and change its color
    textElements.forEach(el => {
        if (el.children.length === 0) {
            el.style.color = color;
        }
    });
}

// Adding event listeners to the buttons
document.getElementById('red').addEventListener('click', () => changeColor('red'));
document.getElementById('green').addEventListener('click', () => changeColor('green'));
document.getElementById('yellow').addEventListener('click', () => changeColor('yellow'));
document.getElementById('blue').addEventListener('click', () => changeColor('blue'));