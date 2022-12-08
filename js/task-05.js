const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

const onInputChange = event => {
  if (event.target.value === '')
    return (refs.nameLabel.textContent = 'Anonymous');

  return (refs.nameLabel.textContent = event.target.value);
};

refs.input.addEventListener('input', onInputChange);
