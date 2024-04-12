function Age(){
    let wiek= parseInt(document.getElementById("wiek").value);
    
    if (wiek>=18){
        console.log("Pelnoletni");
    }
    else{
        console.log("Niepelnoletni");  
    }
  

}
function Temperature(){
    let temp=parseInt(document.getElementById("temp").value);
    console.log((2*temp)+30);
}
function Tablica(){
    let szukwar=parseInt(document.getElementById("tab").value);
    const tab=[1,2,3];
    let suma=0;
    tab.push(69944);
    for (i=0;i<tab.length;i++){
        suma+=tab[i];
    }
 
    console.log(suma);
    for (i=0;i<tab.length;i++){
        if(tab[i]%2==0){
            console.log(tab[i]);
        }
    } 
    for (i=0;i<tab.length;i++){
        console.log(tab[i]*3);
    }   
 
    for (i=0;i<tab.length;i++){
        if(tab[i]==69944){
            console.log(i);
        }
    }
    let max=0
 
    console.log(suma/tab.length);
    for (i=0;i<tab.length;i++){
        if(tab[i]>max){
            max=tab[i];
            console.log(max);
        }
    }
    let a=0;
    for (i=0;i<tab.length;i++){
        if(tab[i]==szukwar){
            a+=1;
        }


    }
    console.log(a);
}

function Fib(){
fib=[1,1];

    for(i=0;i<98;i++){
        fib.push(fib[i]+fib[i+1]);
    }
    console.log(fib);
    

}