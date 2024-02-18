//Funkcje w JS

//pierwszy sposób deklarowania funkcji:
function wyswietlNapis (){
    console.log("Cześć! w pierwszej funkcji.");
}

//drugi sposób deklarowania funkcji:
const wyswietlNapis2 = (imie) => {
    console.log("Witam " + imie + " co tam słychać?");
    dodajDwieRzeczy("Obywatelu ",imie)
}

wyswietlNapis();
console.log("............");
wyswietlNapis2("Edward");
console.log("............");

function dodajDwieRzeczy(pierwszaRzecz, drugaRzecz){
     console.log(pierwszaRzecz + drugaRzecz)
}

dodajDwieRzeczy(87, 13);
dodajDwieRzeczy(87, "ala")