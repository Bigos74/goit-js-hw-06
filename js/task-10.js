const input = document.querySelector('#controls>input');
const clear = document.querySelector('[data-create]');
input.addEventListener('input', onInput);
function onInput(evt) {
  console.log(evt.currentTarget.value);

  const { value } = evt.currentTarget;
  console.log(value);
}
