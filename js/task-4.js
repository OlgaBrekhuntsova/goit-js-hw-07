const loginForm = document.querySelector(".login-form");

function handleLoginFormSubmit(e) {
  e.preventDefault();
  const loginFormElements = loginForm.elements;
  if (
    !loginFormElements.email.value.trim() ||
    !loginFormElements.password.value.trim()
  ) {
    alert("All form fields must be filled in");
    loginForm.reset();
    return;
  }
  const inputData = {};

  for (const loginFormElem of loginFormElements) {
    loginFormElem.name &&
      (inputData[loginFormElem.name] = loginFormElem.value.trim());
  }
  console.log(inputData);
  loginForm.reset();
}
loginForm.addEventListener("submit", handleLoginFormSubmit);
