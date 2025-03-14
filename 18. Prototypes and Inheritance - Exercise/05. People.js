function solution() {
    class Employee {
        #taskCounter = 0;
        _tasks;
    
        constructor(name, age, salary, dividend) {
            this.name = name;
            this.age = age;
            this.salary = salary;
            this.dividend = dividend;
            this._tasks = [];
        }
    
        work() {
            if (this.#taskCounter == this._tasks.length) {
                this.#taskCounter = 0;
            }

            console.log(this._tasks[this.#taskCounter]);
            this.#taskCounter++;
        }
    
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    
    class Junior extends Employee {
        constructor(name, age, salary = 0, dividend = 0) {
            super(name, age, salary, dividend);
            this._tasks.push(`${this.name} is working on a simple task.`);
        }
    }

    class Senior extends Employee {
        constructor(name, age, salary = 0, dividend = 0) {
            super(name, age, salary, dividend);
            this._tasks.push(`${this.name} is working on a complicated task.`);
            this._tasks.push(`${this.name} is taking time off work.`);
            this._tasks.push(`${this.name} is supervising junior workers.`);
        }
    }

    class Manager extends Employee {
        constructor(name, age, salary = 0, dividend) {
            super(name, age, salary, dividend = 0);
            this._tasks.push(`${this.name} scheduled a meeting.`);
            this._tasks.push(`${this.name} is preparing a quarterly report.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary(); 