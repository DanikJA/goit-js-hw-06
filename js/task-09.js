function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  bodyEl.style.background = randomColor;
  colorEl.textContent = randomColor;
});

