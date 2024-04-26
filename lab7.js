document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var mail = document.getElementById("mail").value;
    var haslo = document.getElementById("haslo").value;
    var plec = document.querySelector('input[name="plec"]:checked');
    var telefon = document.getElementById("telefon").value;
    var data = document.getElementById("data").value;
    var kraj = document.getElementById("kraj").value;
    
    clearErrors();
    
    if (!imie || !nazwisko || !mail || !haslo || !plec || !telefon || !data || !kraj) {
    displayError("Please fill in all fields.");
    event.preventDefault();
    return;
    }
    
    if (!checkLetterCount(imie, 3)) {
    displayError("Imie must have at least 3 letters.", "imie");
    event.preventDefault();
    return;
    }
    
    if (!checkLetterCount(nazwisko, 3)) {
    displayError("Nazwisko must have at least 3 letters.", "nazwisko");
    event.preventDefault();
    return;
    }
    
    if (!checkLetterCount(kraj, 3)) {
    displayError("Kraj must have at least 3 letters.", "kraj");
    event.preventDefault();
    return;
    }
    
    if (!validateEmail(mail)) {
    displayError("Invalid email format.", "mail");
    event.preventDefault();
    return;
    }
    
    if (!checkPasswordStrength(haslo)) {
    displayError("Password is too weak. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.", "haslo");
    event.preventDefault();
    return;
    }
    
    if (!validateBirthDate(data)) {
    displayError("You must be at least 18 years old.", "data");
    event.preventDefault();
    return;
    }
    });
    
    function checkLetterCount(value, count) {
    return value.length >= count;
    }
    
    function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }
    
    function checkPasswordStrength(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
    }
    
    function validateBirthDate(date) {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    }
    return age >= 18;
    }
    
    function clearErrors() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error) {
    error.textContent = "";
    });
    }
    
    function displayError(message, fieldId) {
    var errorField = document.getElementById(fieldId + "Error");
    errorField.textContent = message;
    }
    });
