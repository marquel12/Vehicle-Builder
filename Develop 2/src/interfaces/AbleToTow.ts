// import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// define the interface
// interface is a contract that defines the properties and methods that a class must implement
interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | Car): void; 
}

// export the interface
export default AbleToTow;


// a union operator is used to specify that the tow method can take an argument of type Truck, Motorbike, or Car