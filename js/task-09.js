const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeButton = document.querySelector('button.change-color');
const body = document.body;
const colorValue = document.querySelector('span.color');

changeButton.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});
