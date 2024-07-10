let id = (id) => document.getElementById(id);
let formClass = (formClass) => document.getElementsByClassName(formClass);

let lastName = id("lastName"),
    firstName = id("firstName"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = formClass("error"),
    successMessage = id("success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    valid &= validateField(lastName, 0, "Nom doit être entre 3 et 15 caractères", /^[A-Za-z]{3,15}$/);
    valid &= validateField(firstName, 1, "Prénom doit être entre 3 et 15 caractères", /^[A-Za-z]{3,15}$/);
    valid &= validateField(email, 2, "Email invalide", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    valid &= validateField(password, 3, "Mot de passe doit être au moins 8 caractères", /^.{8,}$/);

    if (valid) {
        form.style.display = "none";
        successMessage.style.display = "block";
    }
});

let validateField = (field, serial, message, regex) => {
    if (!regex.test(field.value.trim())) {
        errorMsg[serial].innerHTML = message;
        field.classList.add("input-error");
        return false;
    } else {
        errorMsg[serial].innerHTML = "";
        field.classList.remove("input-error");
        return true;
    }
};
