/// Template Literal
type Color = "red" | "yellow" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const animal: ColoredAnimal = "yellow-cat";
