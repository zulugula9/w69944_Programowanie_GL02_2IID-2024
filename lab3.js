
function zmienTekst() 
{
document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
alert("Witaj na mojej stronie!");
for (let i = 0; i < 101; i++) {
    if (i%2==0){
 console.log(i+" , ");
    }  
}
}
function Dodawanie() {
    let a = prompt("Podaj pierwsza liczbe " );
    let b = prompt("Podaj druga liczbe " );
    if (a,b != null) {
      document.getElementById("liczby").innerHTML = parseInt(a)+parseInt(b);
    }
}

function Czas(){
const data = new Date();
const godzina=data.getHours();
const minuta=data.getMinutes();
const sekundy=data.getSeconds();

document.getElementById("czas").innerHTML = `${godzina}:${minuta}:${sekundy} `;
setTimeout("Czas",1000);
}
var wylosowana=Math.floor(Math.random(0,100)*100);
function Gra(){

const x = document.getElementById("myInput").value;

console.log(x);
var proby=0;


console.log(wylosowana);
if(wylosowana>x)
{
    alert("Wpisana liczba jest za mala"+proby);
    proby++;
}
if(wylosowana<x){
    alert("Wpisana liczba jest za duza"+proby);
    proby++;
}
if(wylosowana==x){
    proby++
    alert("Gratuluje trafiles liczbe"+proby);
}

}