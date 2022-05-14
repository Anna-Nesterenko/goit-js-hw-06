const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  //   console.log(formElements);

  const mail = formElements.email;
  const password = formElements.password;
  //   console.log(mail, password);

  if (mail.value === "" || password.value === "") {
    alert("Введіть данні!");
  } else {
    const objForm = {
      [mail.name]: mail.value,
      [password.name]: password.value,
    };
    console.log(objForm);
  }
  event.currentTarget.reset();
}
