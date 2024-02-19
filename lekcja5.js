//WSTAWIAMY ODWOŁANIA DO ELEMENTÓW BADANEJ STRONY

const wyszukiwarka = document.getElementById("search_query_top"); // wstawianie do zmiennej po ID

const wyszukiwarka2 = document.querySelector("#search_query_top"); // wstawianie do zmiennej po ID
// # - ID, . - klasa
const wyszukiwarka3 = document.querySelector("form#searchbox > input.form-control");// wstawianie do zmiennej po adresie (jak nie ma ID)

const wszystkieWyszukiwarki = document.querySelectorAll(".form-control");// wstawianie do zmiennej wszystkich elementów danej  klasy

const wyszukiwarka4 = document.querySelector("input[name='search_query']"); // wstawianie do zmiennej po nazwie elementu

console.log(wyszukiwarka);
console.log(wyszukiwarka2);
console.log(wyszukiwarka3);
console.log(wszystkieWyszukiwarki);
console.log(wyszukiwarka4);
