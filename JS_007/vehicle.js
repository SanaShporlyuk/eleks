export default class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
        console.log(`Vehicle constructor`);
    }
    displayInfo() {
        console.log(`Vehicle's displayInfo`);
        console.log(`Name: ${this.model};\nYear: ${this.year};\nMax Speed: ${this.maxSpeed};`);
    }
    updateSpeed(newMaxSpeed) {
        this.maxSpeed = newMaxSpeed;
    }
    static staticMethod() {
        console.log("Vehicle's staticMethod");
    }
}