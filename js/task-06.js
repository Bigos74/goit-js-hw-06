const refs = {
  input: document.querySelector('#validation-input'),
  nameLength: document.querySelector('input[data-length]'),
};

const onInputBlur = event => {
  const inputValueLength = event.target.value.length;
  const isLengthCorrect = +refs.nameLength.dataset.length === inputValueLength;
  if (inputValueLength === 0) {
    refs.input.classList.remove('invalid');
    refs.input.classList.remove('valid');
  } else if (isLengthCorrect) {
    refs.input.classList.remove('invalid');
    refs.input.classList.add('valid');
  } else {
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
  }
};

refs.input.addEventListener('blur', onInputBlur);
