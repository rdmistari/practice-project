function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearAll() {
    const display = document.getElementById('display');
    display.value = '';
}

function clearLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
