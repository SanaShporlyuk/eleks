import Vehicle from './vehicle.js';
import Car from './car.js';
import Truck from './truck.js';

let c = new Car("XC60", 2015, 220);
c.displayInfo();

let t = new Truck("TruckFord", 2025, 220);
t.displayInfo();    // call overridden method
t.updateSpeed(330); // call father's method
t.displayInfo();    // verify speed was updated

Vehicle.staticMethod();
Car.staticMethod();
Truck.staticMethod();