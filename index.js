person = {
    id: Math.floor(Math.random() * 1000000) + 1,
    firstName: "John",
    lastName: "Doe",
    fullName: function () { return `${this.firstName} ${this.lastName}`; }
};

function onload() {
    let calc = new Calculator();
    var digit = calc.getCheckDigit(person.id);
    var avg = Functions.CalcAvg(0, person.id);

    document.getElementById('person').innerHTML =
        `ID: ${person.id} CheckDigit: ${digit} Name: ${person.fullName()}`;
    document.getElementById('average').innerHTML =
        `Average: ${avg}`;
}

class Calculator {
    getCheckDigit(id) {
        return id % 9 || 9;
    }
}