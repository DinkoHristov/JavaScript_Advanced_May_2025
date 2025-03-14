function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let personAndTeacherAndStudentObj = toStringExtension();
let person = new personAndTeacherAndStudentObj.Person('Ivan', 'ivan@gmail.com');
let teacher = new personAndTeacherAndStudentObj.Teacher('Ms Claudia', 'claudia@gmail.com', 'Programming');
let student = new personAndTeacherAndStudentObj.Student('James', 'james@gmail.com', 'Mathematics');

console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());