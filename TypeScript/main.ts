enum JobLevel {
    Junior = "Młodszy",
    Mid = "Średni",
    Senior = "Starszy"
}

interface Person{
    firstName: string,
    lastName: string, 
    age: number, 
    isWomen: boolean, 
    level: JobLevel, 
    hobby: Array<string>
}

const person: Person = {
    firstName:  "Konrad",
    lastName: "Wesołowski",
    age: 23,
    isWomen: false,
    level: JobLevel.Junior, //Junior - Mid - Senior
    hobby: ["Jazda na rowerze", "Oglądanie seriali", "Gra w piłkę"]
}

/*
const firstName: string = "Konrad";
const lastName: string = "Wesołowski";
const age: number = 23;
const isWomen: boolean = false;
const level: string = "Junior" //Junior - Mid - Senior
const hobby: Array<string> = ["Jazda na rowerze", "Oglądanie seriali", "Gra w piłkę"];
//const hobby: string[] = ["Jazda na rowerze", "Oglądanie seriali", "Gra w piłkę"]; inna forma deklaracji tablicy
*/

//function createNewUser(firstName, lastName, age, isWomen, level, hobby) {

interface validator {
    isWomen: boolean,
    isValidate(): void
}

class validatorHumanType implements validator {
    isWomen: boolean;
    constructor(isWomen: boolean) {
        this.isWomen = isWomen
    }

    isValidate():string {
        return this.isWomen === false ? "Mężczyzna" : "Kobieta"
    }
} 

function createNewUser(person: Person): void {    
    const validatorHuman = new validatorHumanType(person.isWomen);
    validatorHuman.isValidate();
    /*    let humanType = "";
    if(!person.isWomen) {
        humanType = "Kobieta"
    } else {
        humanType = "Mężczyzna"
    }
*/

    function generateID(): number {
        return Math.floor(Math.random() * (1000 - 1)) + 1;
    }

    return console.log(`Stworzyłem nowe konto ${person.firstName} ${person.lastName} \n Przypisałem mu odpowiedni wiek: ${person.age}, poziom: ${person.level} oraz hobby: ${person.hobby}, oraz płeć: ${validatorHuman.isValidate()}. \n
    Przypisałem ID: ${generateID()}
    `);
}

createNewUser(person);