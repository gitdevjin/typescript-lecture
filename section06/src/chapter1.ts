// Typescript Class
// Class can also function as type
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("work");
  }
}

const employeeB = new Employee("lee", 29, "developer");
console.log(employeeB);

const employeeC: Employee = {
  name: "kim",
  age: 30,
  position: "frontend",
  work() {
    console.log("custom work");
  },
};

employeeC.work();

class ExecutiveOfficer extends Employee {
  officeNum: number;
  constructor(name: string, age: number, position: string, officeNum: number) {
    super(name, age, position);
    this.officeNum = officeNum;
  }
  manage() {
    console.log("managing works");
  }
}
