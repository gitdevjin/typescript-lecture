interface CharacterInterface {
  name: string;
  speed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public speed: number) {
    this.name = name;
    this.speed = speed;
  }

  move() {
    console.log(`move at speed ${this.speed}`);
  }
}
