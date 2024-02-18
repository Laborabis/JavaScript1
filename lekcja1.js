let zmiennaNumber = 20.00;
let zmiennaString = "test";
let zmiennaBoolean = false;
let zmiennaUndefined = undefined;
let zmiennaArray = ["a", 12, "bb", 22.2, false]
let zmiennaObject = {
    color: "blue",
    quantity: 7,
    isTrue: true
}

let wynik = zmiennaNumber + zmiennaString + zmiennaBoolean + zmiennaUndefined + zmiennaArray[3] + zmiennaObject.color;

console.log("Wynik: " + wynik);
console.log("Wynik: " + wynik.length);
console.log("Wynik: " + wynik.slice(7,20));
