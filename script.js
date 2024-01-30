const colors = [
    '#34495e'  // Navy Blue
];

function changeBackgroundColor() {
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Change the background color every 3000 milliseconds (3 seconds)
setInterval(changeBackgroundColor, 3000);
