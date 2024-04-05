

    function Ksiazka(tytul, rok, autor) {
        this.tytul = tytul;
        this.rok = rok;
        this.autor = autor;
        this.ksiega = function() {
        return this.tytul + " "+ this.rok +" "+ this.autor;
        };
       }
       const ksiazka = new Ksiazka("Jan",1930,"Lukasz Fracek");
       console.log(ksiazka.ksiega());
       function Student(imie,nazwisko,numerAlbumu,o1,o2,o3){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.numerAlbumu=numerAlbumu;
        this.o1=o1;
        this.o2=o2;
        this.o3=o3;
        this.srednia=function(){
            return this.imie+" "+this.nazwisko+" "+((this.o1+this.o2+this.o3)/3)
        };
       }
       const student= new Student("Lukasz","Fracek",12345,2,3,4);
       console.log(student.srednia());
       function Samochod(marka,model,rokpro,kolor,predkosc,plus,minus){
        this.marka=marka;
        this.model=model;
        this.rokpro=rokpro;
        this.kolor=kolor;
        this.predkosc=predkosc;
        this.plus=plus;
        this.minus=minus;
        this.zwiekszanie=function(){ 
            return this.predkosc+this.plus;
        };
        this.zmniejszanie=function(){ 
            return this.predkosc-this.minus;
        };
        this.info=function(){
            return 'Marka: ' +this.marka +', model:'+ this.model +', rok produkcji:'+ this.rokpro+', kolor:' +this.kolor+' predkosc:'+ predkosc;
         };
         this.wiek=function(){
            return 2024-this.rokpro;
         }
        }
        const auto= new Samochod("Opel","Astra",2000,"Granatowy",250,45,120);
        console.log(auto.info());
        console.log(auto.zwiekszanie());
        console.log(auto.zmniejszanie());
        console.log(auto.wiek());

        function Prostokat(a,b){
            this.a=a;
            this.b=b;
            this.pole=function(){
                return this.a*this.b;
            };
            this.obwod=function(){
                return ((2*this.a)+(2*this,b));
            }
            this.kwa=function(){
                if(a==b){
                    return "Jest kwadratem";
                }
                else{
                    return "Nie jest kwadratem";
                }
            }
        }



        function pr(){
            let a= parseInt(document.getElementById("a").value);
            let b= parseInt(document.getElementById("b").value);
            const prostokat= new Prostokat(a,b);
            console.log(prostokat.obwod());    
            console.log(prostokat.pole()); 
            console.log(prostokat.kwa());
        }
        