const loginFormEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value == "" || password.value == "") {
    alert("Увага! Усі поля повинні бути заповненими!");

    return;
  }

  const userData = { email: `${email.value}`, password: `${password.value}` };
  console.log(userData);
  event.currentTarget.reset();
};

loginFormEl.addEventListener("submit", handleSubmit);
