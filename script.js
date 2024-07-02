document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    logColorHistory(randomColor);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function logColorHistory(color) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    // listItem.textContent = color;
    listItem.style.backgroundColor = color;
    listItem.style.color = getContrastingColor(color);
    historyList.appendChild(listItem);
}

function getContrastingColor(color) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? 'black' : 'white';
}
