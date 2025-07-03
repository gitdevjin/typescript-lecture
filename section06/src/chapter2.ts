// Access Modifier: private, public, protected
class Employee {
  private name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  private work() {
    console.log(`${this.name} is working`);
  }

  printWork() {
    this.work();
  }
}

const employee = new Employee("lee", 29, "developer");
// employee.name = "kim";
employee.age = 30;
employee.position = "frontend";
employee.printWork();
