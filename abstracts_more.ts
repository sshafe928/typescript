abstract class Vehicle{
    constructor(brand: string){
        this.brand = brand
    }

    brand: string

    abstract startEngine(): void

    displayBrand = () => console.log('The brand of this vehicle is ' + this.brand);

}

class Car extends Vehicle {
    constructor(brand:string){
        super(brand);
    }

    startEngine(): void {
        console.log('Engine started for ' + this.brand);
    }
}

const myCar = new Car("Toyota");
myCar.startEngine();       
myCar.displayBrand(); 


// Add another class called Motorcycle that extends Vehicle. Override startEngine() with a custom message and demonstrate calling the methods.

class Motorcycle extends Vehicle {
    constructor(brand:string){
        super(brand)
    }

    startEngine(): void {
        console.log('Roaring engine started for motorcycle brand: ' + this.brand);
    }
}

const myMotorcycle = new Motorcycle('Kawasaki');
myMotorcycle.displayBrand
myMotorcycle.startEngine