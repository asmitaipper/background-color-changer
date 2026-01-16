// Select elements
const body = document.body;
const colorCodeSpan = document.getElementById("color-code");
const randomBtn = document.getElementById("btn-random");
const fixedButtons = document.querySelectorAll(".fixed-btn");

// Generate a random hex color like #a1b2c3
function getRandomHexColor() {
  const hexChars = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }
  return color;
}

// Apply a color to the background and update text
function applyColor(color) {
  body.style.backgroundColor = color;
  colorCodeSpan.textContent = color;
}

// Handle random button click
randomBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  applyColor(randomColor);
});

// Handle fixed color buttons (Red, Blue, Green)
fixedButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.getAttribute("data-color");
    applyColor(color);
  });
});

// Set initial color on load
applyColor("#ffffff");
