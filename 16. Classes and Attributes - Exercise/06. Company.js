class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || salary == '' || position == '' || department == '' ||
            name == null || salary == null || position == null || department == null ||
            name == undefined || salary == undefined || position == undefined || department == undefined) {
                throw new Error('Invalid input!');
        }

        if (Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        let foundDepartment = this.departments[department];
        if (foundDepartment) {
            this.departments[department].push({
                name,
                salary: Number(salary),
                position
            });
        } else {
            this.departments[department] = [{
                name,
                salary: Number(salary),
                position
            }];
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartmentName = '';
        let bestDepartment = {};
        let maxAverageSum = 0;

        let result = '';
        for (const key in this.departments) {
            let sortedEmployees = this.departments[key].sort( (a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
            let currentAverageSum = this.departments[key].reduce( (acc, el) => acc += el.salary, 0) / this.departments[key].length;

            if (currentAverageSum > maxAverageSum) {
                maxAverageSum = currentAverageSum;
                bestDepartment = this.departments[key];
                bestDepartmentName = key;
            }
        }

        result += `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${maxAverageSum.toFixed(2)}\n`;
        result += bestDepartment.map(e => `${e.name} ${e.salary} ${e.position}`).join('\n');

        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Expected Output:
// -> Best Department is: Construction
// -> Average salary: 1500.00
// -> Stan 2000 architect
// -> Stanimir 2000 engineer
// -> Pesho 1500 electrical engineer
// -> Slavi 500 dyer
