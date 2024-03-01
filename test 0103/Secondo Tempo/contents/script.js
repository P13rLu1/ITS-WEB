function validateEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex === -1 || email.indexOf("@", atIndex + 1) !== -1) {
    return false;
  }

  const dotIndex = email.indexOf(".", atIndex);
  if (dotIndex === -1) {
    return false;
  }

  if (dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
    return false;
  }

  return true;
}

function validateUsername(username) {
  const lowercaseUsername = username.toLowerCase();
  return username.length >= 10 && username === lowercaseUsername;
}

function validatePassword(password) {
  const specialChars = "!£$%&/()=*,.-;:_+";
  let hasLowercase = false;
  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (char >= "a" && char <= "z") {
      hasLowercase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }

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
