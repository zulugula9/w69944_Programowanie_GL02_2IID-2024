
let wynik=1;
function Silnia(a){

    for (i=0;i<a;i++){
    wynik=wynik*(i+1);
  }
  return wynik;
}
console.log(Silnia(5));
function But(){
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});
}
 function F1(){
    const toggleButton = document.getElementById('toggleButton');

    const elementToToggle = document.getElementById('elementToToggle');

    toggleButton.addEventListener('click', () => {

        if (elementToToggle.classList.contains('hidden')) {

            elementToToggle.classList.remove('hidden');
        } else {

            elementToToggle.classList.add('hidden');
        }
    });
 }
 function DodList(){
    const inputField = document.getElementById('lis');

    const list = document.getElementById('item123');




        const value = inputField.value.trim();

        if (value !== '') {

            const listItem = document.createElement('li');
            listItem.textContent = value;

            list.appendChild(listItem);
            inputField.value = '';
        }

 }
 function addItemToTable() {
    const firstNameInput = document.getElementById('firstNameInput');
    const lastNameInput = document.getElementById('lastNameInput');
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    
    if (firstName !== '' && lastName !== '') {
    const table = document.getElementById('dataTable');
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = firstName;
    cell2.textContent = lastName;
    firstNameInput.value = '';
    lastNameInput.value = '';
    } else {
    alert('Pola tekstowe są puste. Wpisz imię i nazwisko, które chcesz dodać do tabeli.');
    }
    }