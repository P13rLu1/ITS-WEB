function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateUsername(username) {
  return /^[a-z]{10,}$/.test(username);
}

function validatePassword(password) {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!£$%&/()=*,.\-;:_+]/.test(password);
  return (
    password.length >= 10 &&
    hasLowercase &&
    hasUppercase &&
    hasNumber &&
    hasSpecial
  );
}

function register() {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let errorMessage = "";

  if (!validateEmail(email)) {
    errorMessage += "Email non valida.<br>";
  }
  if (!validateUsername(username)) {
    errorMessage += "Username deve contenere almeno 10 lettere minuscole.<br>";
  }
  if (!validatePassword(password)) {
    errorMessage +=
      "Password deve contenere almeno 10 caratteri, uso obbligatorio di maiuscole e minuscole, almeno una cifra e un carattere speciale.<br>";
  }

  if (errorMessage !== "") {
    document.getElementById(
      "message"
    ).innerHTML = `<div class="error">${errorMessage}</div>`;
  } else {
    document.getElementById(
      "message"
    ).innerHTML = `<div class="success">Registrazione avvenuta con successo!<img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" width="100px" alt="Success icon"></div>`;
  }
}

document.getElementById("showPassword").addEventListener("change", function () {
  const passwordInput = document.getElementById("password");
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
