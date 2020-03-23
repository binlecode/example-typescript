/*
Typescript interfaces do not result in any compiled JavaScript code. This is due to 
type erasure when compiled to javascript. 
Interfaces are used at design time to provide autocompletion and at compile time to 
provide type checking.

Just like enumerations, interfaces are open and all declarations with a common root 
are merged into a single interface.
*/

interface Vehicle {
    // '?' for optional properties
    color?: string;
}
// ts interface is open, it can be 'opened' and modified in multiple places
interface Vehicle {
    numberOfWheels?: number;
}

let v: Vehicle = {color: 'white'};
console.log(v.color);

let myVan: Vehicle = {type: 'Van'} as Vehicle;
console.log(myVan.color);  // => 'undefined'

class Car implements Vehicle {
    // readonly properties can be assigned in contructor, then not changable after
    static readonly type: string = 'CAR';
    // color is optional in interface, but can be enforced as mandatory in impl class
    color: string;
    numberOfWheels?: number;

    /**
     * @param color 
     * @param numberOfWheels optional
     */
    constructor(color: string, numberOfWheels?: number) {
        this.color = color;
        if (numberOfWheels != null) {
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
    isAwd: boolean = true;
}

let myV: Vehicle = {
    color: 'while'
}

let mySuv: Suv = <Suv> myV;
console.log(mySuv.isAwd);  // return 'true'
