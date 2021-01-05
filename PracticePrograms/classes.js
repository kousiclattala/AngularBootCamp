var Person = /** @class */ (function () {
    function Person(name, userId) {
        this.name = name;
        this.userId = userId;
    }
    Person.prototype.getPerson = function () {
        console.log(this.name + " with ID: " + this.userId);
    };
    return Person;
}());
var person = new Person("Kousic", 1);
person.getPerson();
