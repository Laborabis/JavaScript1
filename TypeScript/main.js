var JobLevel;
(function (JobLevel) {
    JobLevel["Junior"] = "M\u0142odszy";
    JobLevel["Mid"] = "\u015Aredni";
    JobLevel["Senior"] = "Starszy";
})(JobLevel || (JobLevel = {}));
var person = {
    firstName: "Konrad",
    lastName: "Wesołowski",
    age: 23,
    isWomen: false,
    level: JobLevel.Junior, //Junior - Mid - Senior
    hobby: ["Jazda na rowerze", "Oglądanie seriali", "Gra w piłkę"]
};
var validatorHumanType = /** @class */ (function () {
    function validatorHumanType(isWomen) {
        this.isWomen = isWomen;
    }
    validatorHumanType.prototype.isValidate = function () {
        return this.isWomen === false ? "Mężczyzna" : "Kobieta";
    };
    return validatorHumanType;
}());
function createNewUser(person) {
    var validatorHuman = new validatorHumanType(person.isWomen);
    validatorHuman.isValidate();
    /*    let humanType = "";
    if(!person.isWomen) {
        humanType = "Kobieta"
    } else {
        humanType = "Mężczyzna"
    }
*/
    function generateID() {
        return Math.floor(Math.random() * (1000 - 1)) + 1;
    }
    return console.log("Stworzy\u0142em nowe konto ".concat(person.firstName, " ").concat(person.lastName, " \n Przypisa\u0142em mu odpowiedni wiek: ").concat(person.age, ", poziom: ").concat(person.level, " oraz hobby: ").concat(person.hobby, ", oraz p\u0142e\u0107: ").concat(validatorHuman.isValidate(), ". \n\n    Przypisa\u0142em ID: ").concat(generateID(), "\n    "));
}
createNewUser(person);
