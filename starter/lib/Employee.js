// TODO: Write code to define and export the Employee class


class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }
    getEmail() {
    return this.email; 
    }

    getId() {
        return this.id;
    }
    getName() {
    return this.name;

    }
    getRole() {

        return "Employee";
    }
}

module.exports = Employee;
