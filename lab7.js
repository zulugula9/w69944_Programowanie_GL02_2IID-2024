//Przypisujemy do stałej element o id name. W tym przypadku jest to input dla Imienia
const nameField = document.querySelector("#name");
//Przypisujemy do stałej element o klasie error występujący bezpośrednio po elementcie o id name  
const nameErrorField = document.querySelector("#name + .error");

//Do pola name dodajemy obserwowanie eventu 'input', który wywoływany jest za każdym razem gdy wartość w polu jest wprowadzana
nameField.addEventListener('input', () => {
    //Wywołujemy funkcję sprawdzającą czy pole jest wymagane (nie puste). Jako argumenty funkcji podajemy pole oraz pole z błędem gdzie będziemy wyświetlać błąd

     /*W przypadku naszych funkcji gdy chcemy aby jakieś pole miało kilka walidacji
    warto sprawdzić czy wcześniejsze wymagania zostały spełnione. 
    Jeżeli wymagania nie zostały spełnione nie ma po co wywoływać kolejnych walidacji z racji tego jak nasze FUNKCJE ZOSTAŁY STWORZONE
    */
    if(!requiredValidation(nameField, nameErrorField))
    {
        minLengthValidation(nameField, nameErrorField, 2)
    }
 });


const surnameFiled = document.querySelector('#surname');
//Zamiast używać isniejący element. Można utworzyć nowy element. Nowy element będzie widoczny w html dopiero po dodaniu go.
const surnameFiledError = document.createElement('span');
surnameFiledError.classList.add('error');
surnameFiled.addEventListener('input', () => {
    if(requiredValidation(surnameFiled, surnameFiledError))
    {
        //Gdy występi błąd dodajemy element po polu z nazwiskiem
        surnameFiled.after(surnameFiledError);
    }
    else {
        //W przypadku braku błedu usuwamy element
        surnameFiledError.remove();
    }
});

//Zamiast szukać elementów po id możemy wykorzystać atrybut name np. [name='email']
const emailField = document.querySelector("[name='email']");
const emailErrorField = document.querySelector("[name='email'] + .error");
emailField.addEventListener('input', () => {
    emailValidation(emailField, emailErrorField);
});


const passwordFiled = document.querySelector("[name='password']");
const passwrodErrorField = document.querySelector("[name='password'] + .error");

//Możemy też dokonać walidacji na innym evencie np. focusout. Walidacja wykona się po tym jak użytkownik zakończy interacje z pole
passwordFiled.addEventListener('focusout', () => {
    passwordValidation(passwordFiled, passwrodErrorField);
});


//Dla pól typu radio do znaleźenia elementów można wykorzystać metodę getElementsByName
const genderFields = document.getElementsByName('gender');
const genderErrorField = document.getElementById('genderError');

const phoneField = document.querySelector("[name='phone']");
const phoneErrorField = document.querySelector("[name='phone'] + .error");
phoneField.addEventListener('input', () => {
    if(!requiredValidation(phoneField, phoneErrorField))
    {
        if(!minLengthValidation(phoneField, phoneErrorField, 9))
            {
                maxLengthValidation(phoneField, phoneErrorField, 9);
            }
    }
});

//Zad 8
//W przypadku gdy chcemy ograniczyć wpisywanie jakiś znaków możemy użyć eventu keypress.
phoneField.addEventListener('keypress', (event) => {
    var charCode = (event.which) ? event.which : event.keyCode
    /*Gdy kliknięty znak nie spełnia naszych wymagań to powstrzymujemy działanie dalszych eventów. W tym uniemożliwamy 
    wprowadzenie innych znaków niż liczby zgodnie z tablicą ascii */
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }

    return true;
});


const birthField = document.querySelector("[name='birthDate']");
const birthErrorField = document.querySelector("[name='birthDate'] + .error");
birthField.addEventListener('input', () => {
    if(!requiredValidation(birthField, birthErrorField))
    {
        validAge(birthField, birthErrorField);
    }
});


const confirmPasswordField = document.querySelector("[name='confirm-password']");
const confirmPasswordErrorField = document.querySelector("[name='confirm-password'] + .error");
confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword(confirmPasswordField, passwordFiled,confirmPasswordErrorField);
});

const countyField = document.querySelector("[name='country']");
const countyErrorField = document.querySelector("[name='country'] + .error");

//Zad 6 
const provinceField = document.querySelector("input[name='province']");
const provinceSelectField = document.querySelector("select[name='province']");
const provinceErrorField = document.getElementById('provinceError')

//W przypadku elementu typu select nasłuchujemy na evencie change
countyField.addEventListener('change', () => {
    const result = requiredValidation(countyField, countyErrorField);

    if (countyField.value === "Polska") {
        //Gdy wartość pola kraju to Polska ukrywamy pole tekstowe a pokazujemy select
        provinceField.hidden = true;
        provinceSelectField.hidden = false;
    }
    else {
        provinceField.hidden = false;
        provinceSelectField.hidden = true;
    }

    //W zależności od wartości (wypełniony lub nie) aktywujemy pole (false) lub je wyłączamy (true)
    provinceField.disabled = result;
    provinceSelectField.disabled = result;
});

provinceSelectField.addEventListener('change', () => {
    validProvince(provinceSelectField);
});

provinceField.addEventListener('input', () => {
    validProvince(provinceField);

});

const addressField = document.querySelector("[name='address']");
const addressErrorField = document.querySelector("[name='address'] + .error");
const contactAddressField = document.querySelector("[name='contactAddress']");
const contactAddressErrorField = document.querySelector("[name='contactAddress'] + .error");

function validProvince(field) {
    const result = requiredValidation(field, provinceErrorField);
    //W zależności od walidacji uruchamiamy pole lub je wyłączamy
    addressField.disabled = result;
    contactAddressField.disabled = result;
}

addressField.addEventListener('input', () => {
    if(!requiredValidation(addressField, addressErrorField)){
        minLengthValidation(addressField,addressErrorField, 3);
    }
});
contactAddressField.addEventListener('input', () => {
    if(!requiredValidation(contactAddressField, contactAddressErrorField))
    {   
        minLengthValidation(contactAddressField, contactAddressErrorField, 3);
    }
});

const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");
checkboxField.addEventListener('change', () => {
    //Zmienimy widoczność elementu zawierający adres korespodencyjny w zależności od checkboxa
    contactAddress.hidden = checkboxField.checked;
});


const form = document.querySelector('form');
//Event subimit jest wywoływany gdy zostanie kliknięty przycisk
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //Wywołujemy funkcje walidującą formularz. Gdy jest poprawny wyświetlamy Sukces
    if (validForm()) {
        alert('Sukces');
    }
});

function validForm() {
     if (requiredValidation(nameField, nameErrorField) || minLengthValidation(nameField, nameErrorField, 2) || requiredValidation(surnameFiled, surnameFiledError) ||
        emailValidation(emailField, emailErrorField) || passwordValidation(passwordFiled, passwrodErrorField) || validConfirmPassword(confirmPasswordField, passwordFiled,confirmPasswordErrorField)  || 
        radioRequiredValidation(genderFields, genderErrorField) ||
        requiredValidation(phoneField, phoneErrorField) || 
        minLengthValidation(phoneField, phoneErrorField, 9) || maxLengthValidation(phoneField, phoneErrorField, 9) || requiredValidation(birthField, birthErrorField) || validAge(birthField, birthErrorField) ||
        requiredValidation(countyField, countyErrorField) || ((!provinceSelectField.hidden && requiredValidation(provinceSelectField, provinceErrorField)) || 
        (!provinceField.hidden && requiredValidation(provinceField, provinceErrorField))) || requiredValidation(addressField, addressErrorField) || minLengthValidation(addressField,addressErrorField, 3)
        || 
        (!checkboxField.checked && (requiredValidation(contactAddressField, contactAddressErrorField) ||  minLengthValidation(contactAddressField, contactAddressErrorField, 3)))
    ) {
         return false;
     }

    return true;
}