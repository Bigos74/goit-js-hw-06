const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    mail,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
};
form.addEventListener('submit', onFormSubmit);
