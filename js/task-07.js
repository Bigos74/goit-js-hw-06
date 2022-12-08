const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const changeSize = event => {
  refs.text.style.fontSize = `${event.target.value}px`;
};

refs.input.addEventListener('input', changeSize);

console.log(refs.input.__proto__);
