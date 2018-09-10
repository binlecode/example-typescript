

interface Vehicle {
    // static readonly type: string = 'VEHICLE';
    color?: string;
    numberOfWheels?: number;
}

let myVan: Vehicle = {type: 'Van'} as Vehicle;
console.log(myVan.color);

class Car implements Vehicle {
    static readonly type: string = 'CAR';
    color?: string;
    numberOfWheels?: number;

    /**
     * @param color 
     * @param numberOfWheels optional
     */
    constructor(color: string, numberOfWheels?: number) {
        this.color = color;
        if (numberOfWheels) {
            this.numberOfWheels = numberOfWheels;
        }
    }

    // method is public by default
    setColor(color: string) {
        this.color = color;
    }

    honk(): void {
        null;
    }

    feature(): string {
        return `this car has color: ${this.color} and ${this.numberOfWheels? this.numberOfWheels : '4'} wheels`;
    }
}

let myCar: Car = new Car('blue');
console.log(`car feature: ${myCar.feature()}`);
myCar.setColor('red');
console.log(`car feature: ${myCar.feature()}`);

class Coupe extends Car {
    static readonly type: string = 'COUPE'

    /**
     * @param color 
     * @param numberOfWheels optional, default to 4 if not given
     */
    constructor(color: string, numberOfWheels = 4) {  // type of numberOfWheels is inferred from default value
        // must call super() in constructor for inherited properties
        super(color, numberOfWheels);
    }

    feature(): string {
        return `this coupe has color: ${this.color}, and ${this.numberOfWheels} wheels`;
    }
}
let myCoupe: Coupe = new Coupe('pink');
console.log(`coupe feature: ${myCoupe.feature()}`)
myCoupe.setColor('purple')
console.log(`coupe feature: ${myCoupe.feature()}`)

console.log('typeof Car: ' + typeof Car);  // 'function'
console.log('type of myCar: ' + typeof myCar);  // 'object'

// try {
//     myVan.type = 'Limo'; // this will blow as 'type' property is readonly
// } catch

// example of type assertion
class Suv extends Car {
    isAwd: boolean;
}

let myV: Vehicle = {
    color: 'while'
}

let mySuv: Suv = <Suv> myV;
console.log(mySuv.isAwd);  // return 'undefined'
