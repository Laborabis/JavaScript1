//działania na tablicach
let miejscowosc = "Wroclaw";
let tablica = ["Ala", 36, miejscowosc, {"id": 1}];

const imionaTablica = ["Ala", "Tomasz", "Wojtek", "Bartrosz"]
const wiekTablica = [8,14,15,3,8,10];

console.log(tablica.length);
console.log(imionaTablica);
//console.log(wiekTablica.length);
imionaTablica.push("Rafał");//dodawanie na końcu
console.log(imionaTablica);
imionaTablica[4] = "Rafałek";
console.log(imionaTablica);
imionaTablica[0] = "Alicja";
console.log(imionaTablica);
imionaTablica.unshift("Marcin");
console.log(imionaTablica);//dodawanie na początku
console.log(imionaTablica.pop());//wyświatlanie i usuwanie końcowego elementu
imionaTablica.shift(); //usuwanie pierwszego elementu z tablicy
console.log(imionaTablica);

let wszystkieImionaZTablicy = imionaTablica.join(" oraz ");
console.log(imionaTablica);
console.log(wszystkieImionaZTablicy);

console.log(imionaTablica);
console.log(imionaTablica.reverse()); //odwócenie kolejności elementów w tablicy
console.log(imionaTablica);

console.log(imionaTablica.indexOf("Tomasz"));
console.log(imionaTablica.indexOf("brak"));
console.log(wiekTablica.indexOf(8));// zwraca numer indeksu w tablicy dla pierwszej znalezionej wartości (-1 jeżeli jej nie znajdzie)

console.log(imionaTablica.includes("Bartosz"));
console.log(imionaTablica.includes("Tomasz"));//czy tablica zawiera daną wartość

console.log(wiekTablica);
console.log(wiekTablica.sort((a,b) => a-b));//sortowanie od namniejszej do największej (b-a-na odwtót)
console.log(wiekTablica);

const polaczenieTablic = imionaTablica.concat(wiekTablica);
console.log (polaczenieTablic);