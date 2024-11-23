export function validateFullName(name) {
  let nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return nameRegex.test(name);
}

export function validateDocumentNumber(documentNumber) {
  let documentNumberRegex = /^[0-9]+$/;
  return documentNumberRegex.test(documentNumber);
}

export function validateEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone) {
  let phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

export function clearErrors() {
  let errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((el) => {
    el.innerText = "";
  });
}

export function validateDocumentType(documentType) {
  return documentType !== "default";
}

export function showError(elementId, message) {
  document.getElementById(elementId).innerText = message;
}

export function validateUsername(username) {
  let usernameRegex = /^[a-zA-Z0-9_.-]+$/;
  return usernameRegex.test(username);
}

export function validatePassword(password) {
  let passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export function validatePasswordOnTyping() {
  let password = document.getElementById("password").value;
  let strengthBar = document.getElementById("passwordStrength");
  strengthBar.className = "password-strength";

  if (password.length < 8) {
    strengthBar.classList.add("strength-weak");
    showError(
      "passwordError",
      "La contraseña debe tener al menos 8 caracteres."
    );
  } else if (
    password.length >= 8 &&
    /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])/.test(password)
  ) {
    if (password.length >= 12) {
      strengthBar.classList.add("strength-strong");
      showError("passwordError", "La contraseña es muy segura.");
    } else if (password.length >= 10) {
      strengthBar.classList.add("strength-good");
      showError("passwordError", "La contraseña es segura.");
    } else {
      strengthBar.classList.add("strength-fair");
      showError("passwordError", "La contraseña es debil.");
    }
  } else {
    strengthBar.classList.add("strength-weak");
    showError("passwordError", "La contraseña es debil.");
  }
}
