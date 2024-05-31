document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.querySelector("#name");
    const nameErrorField = document.querySelector("#name + .error");

    const surnameField = document.querySelector("#surname");
    const surnameErrorField = document.querySelector("#surname + .error");

    const emailField = document.querySelector("[name='email']");
    const emailErrorField = document.querySelector("[name='email'] + .error");

    const passwordField = document.querySelector("[name='password']");
    const passwordErrorField = document.querySelector("[name='password'] + .error");

    const confirmPasswordField = document.querySelector("[name='confirm-password']");
    const confirmPasswordErrorField = document.querySelector("[name='confirm-password'] + .error");

    const form = document.querySelector('form');

    function requiredValidation(field, errorField) {
        if (field.value.trim() === "") {
            errorField.textContent = "Pole jest wymagane.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }

    function minLengthValidation(field, errorField, minLength) {
        if (field.value.length < minLength) {
            errorField.textContent = `Pole musi mieć przynajmniej ${minLength} znaki.`;
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }

    function emailValidation(field, errorField) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(field.value)) {
            errorField.textContent = "Proszę wprowadzić poprawny email.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }

    function passwordValidation(field, errorField) {
        if (field.value.length < 6) {
            errorField.textContent = "Hasło musi mieć przynajmniej 6 znaków.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }

    function validConfirmPassword(confirmField, passwordField, errorField) {
        if (confirmField.value !== passwordField.value) {
            errorField.textContent = "Hasła nie są takie same.";
            return true;
        } else {
            errorField.textContent = "";
            return false;
        }
    }

    function validForm() {
        const nameValid = !requiredValidation(nameField, nameErrorField) && !minLengthValidation(nameField, nameErrorField, 2);
        const surnameValid = !requiredValidation(surnameField, surnameErrorField) && !minLengthValidation(surnameField, surnameErrorField, 2);
        const emailValid = !requiredValidation(emailField, emailErrorField) && !emailValidation(emailField, emailErrorField);
        const passwordValid = !requiredValidation(passwordField, passwordErrorField) && !passwordValidation(passwordField, passwordErrorField);
        const confirmPasswordValid = !requiredValidation(confirmPasswordField, confirmPasswordErrorField) && !validConfirmPassword(confirmPasswordField, passwordField, confirmPasswordErrorField);

        return nameValid && surnameValid && emailValid && passwordValid && confirmPasswordValid;
    }

    nameField.addEventListener('input', () => {
        requiredValidation(nameField, nameErrorField);
        minLengthValidation(nameField, nameErrorField, 2);
    });

    surnameField.addEventListener('input', () => {
        requiredValidation(surnameField, surnameErrorField);
        minLengthValidation(surnameField, surnameErrorField, 2);
    });

    emailField.addEventListener('input', () => {
        requiredValidation(emailField, emailErrorField);
        emailValidation(emailField, emailErrorField);
    });

    passwordField.addEventListener('input', () => {
        requiredValidation(passwordField, passwordErrorField);
        passwordValidation(passwordField, passwordErrorField);
    });

    confirmPasswordField.addEventListener('input', () => {
        requiredValidation(confirmPasswordField, confirmPasswordErrorField);
        validConfirmPassword(confirmPasswordField, passwordField, confirmPasswordErrorField);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validForm()) {
            alert('Sukces');
        }
    });
});
class Samochod{
    constructor(marka, model, rok, kolor, predkosc) {
        this.marka = marka;
        this.model = model;
        this.rok = rok;
        this.kolor = kolor;
        this.predkosc = predkosc;
    }

    zwiekszanie(wartosc){
        this.predkosc+=wartosc;
    }
    zmniejszanie(wartosc){
        this.predkosc-=wartosc;
    }
    informacje(){
        return `${this.marka} ${this.model} (${this.rok}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc} km/h`;
    }
}

const samochody=[
    new Samochod("Mercedes","G63",2023,"Czarny",200),
    new Samochod("BMW","M3",2021,"Niebieski",180),
    new Samochod("Opel","Astra",2015,"Granatowy",80),
    new Samochod("Toyota","Yaris",2015,"Brazowy",130)
];
function Srednia(samochody) {
    const suma = samochody.reduce((sum, samochod) => sum + samochod.predkosc, 0);
    return suma / samochody.length;
}

const sredniapredkosc = Srednia(samochody);
console.log(`Średnia prędkość samochodów: ${sredniapredkosc} km/h`);

// Wypisywanie marki i modelu samochodów wyprodukowanych w określonym roku
function SamochodyzRoku(samochody, rok) {
    return samochody.filter(samochod => samochod.rok === rok).map(samochod => `${samochod.marka} ${samochod.model}`);
}

const rok = 2015;
const samorok = SamochodyzRoku(samochody, rok);
console.log(`Samochody wyprodukowane w roku ${rok}: ${samorok.join(', ')}`);

