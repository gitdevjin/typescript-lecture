class Student {
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  static study() {
    console.log(`${this.grade} study`);
  }

  studying() {
    console.log(`${this.name} studying`);
  }
}

let studentA = new Student("lee", "A+", 30);
console.log(studentA);
Student.study();
studentA.studying();

class StudentDeveloper extends Student {
  skill;
  constructor(name, grade, age, skill) {
    super(name, grade, age);
    this.skill = skill;
  }
  programming() {
    console.log(`${this.name} is programming with ${this.skill}`);
  }
}

const developer = new StudentDeveloper("kim", "B+", 29, "TypeScript");
developer.programming();
