import Vehicle from './vehicle.js';

export default class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
        console.log(`Car constructor\n`);
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Car's displayInfo`);
        console.log(`Type: ${this.type};\n`);
    }
    static staticMethod() {
        super.staticMethod();
        console.log("Car's staticMethod");
    }    
}