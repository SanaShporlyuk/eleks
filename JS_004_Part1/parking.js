// const vType = {
// 	EV: "ev",
// 	COMPACT: "compact",
// }
// new Car(vType.EV);

// let capacity = {
//     "ev": 2,
//     "compact": 1,
// }
// capacity[vehicle.type] -= 1

class Garage {
    constructor(capacity, evCapacity) {
        this.capacity = capacity;
        this.evCapacity = evCapacity;
        this.maxCapacity = capacity;
        this.maxEvCapacity = evCapacity;
    }

    parkVehicle(vehicle) {
        console.log(`parking: ${vehicle.constructor.name}`);
        if (vehicle.isEV()) {
            if (this.evCapacity > 0) {
                this.evCapacity -= 1;
            } else {
                throw new Error("No EV capacity");
            }
        } else {
            if (this.capacity > 0) {
                this.capacity -= 1;
            } else {
                throw new Error("No capacity");
            }
        }
        console.log(`Capacity: ${this.capacity}, EvCapacity: ${this.evCapacity}`);
    }

    leaveParking(vehicle) {
        console.log(`leaving: ${vehicle.constructor.name}`);
        if (vehicle.isEV()) {
            if ((this.evCapacity + 1) < this.maxEvCapacity) {
                this.evCapacity++;
            } else {
                throw new Error("Max Ev capacity exceeded");
            }
        } else {
            if ((this.capacity + 1) < this.maxCapacity) {
                this.capacity++;
            } else {
                throw new Error("Max Ev capacity exceeded");
            }
        }
        console.log(`Capacity: ${this.capacity}, EvCapacity: ${this.evCapacity}`);
    }
}

class Vehicle {
    constructor(isEV, isCompact) {
        this.isElectic = isEV;
        this.isCompact = isCompact;
    }

    isEV() {
        return this.isElectic;
    }
}

class Car extends Vehicle {
    constructor(isEV) {
        super(isEV, /*isCompact=*/true);
    }
}

class Truck extends Vehicle {
    constructor(isEV) {
        super(isEV, /*isCompact=*/false);
    }
}

let volvo = new Car(/*isEv=*/false, /*isCompact=*/false);
let mini = new Car(/*isEv=*/false);
let tesla = new Car(/*isEv=*/true);
let taho = new Truck(/*isEv=*/false);

let garage = new Garage(/*capacity=*/2, /*evCapacity=*/1);
garage.parkVehicle(volvo);
garage.parkVehicle(tesla);
garage.parkVehicle(taho);
garage.leaveParking(taho);
