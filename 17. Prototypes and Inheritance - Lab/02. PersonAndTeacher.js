function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let personAndTeacherObj = personAndTeacher();
let person = new personAndTeacherObj.Person('Ivan', 'ivan@gmail.com');
let teacher = new personAndTeacherObj.Teacher('Ms Claudia', 'claudia@gmail.com', 'Programming');

console.log(`${person.name} with email: ${person.email}`);
console.log(`${teacher.name} with email: ${teacher.email} teaching on: ${teacher.subject}`);