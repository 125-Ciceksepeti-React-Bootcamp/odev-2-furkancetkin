import Animal from "./animal";

class Duck extends Animal {
    constructor(name, image, age, numberOfLegs) {
        super(name, image, numberOfLegs);

        this.age = age;
    }
}

export default Duck;