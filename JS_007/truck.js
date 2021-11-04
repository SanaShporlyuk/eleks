import Vehicle from './vehicle.js';

export default class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
        console.log(`Truck constructor\n`);
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Truck's displayInfo`);
        console.log(`Type: ${this.type};\n`);
    }
}