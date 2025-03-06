function filterEmployees(data, criteria) {
    class Employee {
        constructor(id, first_name, last_name, email, gender) {
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.gender = gender;
        }
    }

    let [criteriaKey, criteriaValue] = criteria.split('-');

    let employees = JSON.parse(data).map(employee =>
        new Employee(employee.id, employee.first_name, employee.last_name, employee.email, employee.gender)
    );

    if (criteriaValue === 'all' || criteriaKey === 'all') {
        employees.forEach( (employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    } else {
        let filteredEmployees = employees.filter(e => e[criteriaKey] === criteriaValue);

        filteredEmployees.forEach( (employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    }
}