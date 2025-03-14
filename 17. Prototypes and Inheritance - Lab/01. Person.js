function createPerson(firstName, lastName) {
    class Person {
        constructor(firstName, lastName) {
            this._firstName = firstName;
            this._lastName = lastName;
            this._fullName = `${this._firstName} ${this._lastName}`;
        }

        get firstName() {
            return this._firstName;
        }

        set firstName(value) {
            this._firstName = value;

            this._fullName = `${this._firstName} ${this._lastName}`;
        }

        get lastName() {
            return this._lastName;
        }

        set lastName(value) {
            this._lastName = value;

            this._fullName = `${this._firstName} ${this._lastName}`;
        }

        get fullName() {
            return this._fullName;
        }

        set fullName(value) {
            this._fullName = value;

            let twoNames = this._fullName.split(' ');
            let firstName = twoNames[0];
            let lastName = twoNames[1];

            if (firstName && lastName) {
                this._firstName = firstName;
                this._lastName = lastName;
            }
        }
    }

    return new Person(firstName, lastName);
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla