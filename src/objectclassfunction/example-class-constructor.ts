
// simplest way is using default constructor
class Thing {
    isReal: boolean | undefined;
    isLive: boolean | undefined;
}
let thing0 = new Thing(); // new calls default constructor
console.log(typeof thing0);           // => 'object'
console.log(thing0 instanceof Thing); // => true
console.log(thing0.constructor);      // => [Function: Thing]

// implicit type casting with value assignment
let thing1: Thing = {isReal: true, isLive: true};
console.log(thing1 instanceof Thing); // => false
console.log(thing1.constructor);      // [Function: Object]

// now a class with constructor

class Box {
    type: string | undefined;
    color: string | undefined;
    
    /**
     * constructor takes a hash map with matching field type
     * note the '?' after 'attrs' to support 0-arg construction mode
     * note the '?' after each attrs key to support flexible partial assignment
     */
    constructor(attrs?: {type?: string, color?: string}) {
        if (attrs) {
            if (attrs.type) {
                this.type = attrs.type;
            }
            if (attrs.color) {
                this.color = attrs.color;
            }
        }
    }
}

let b: Box = new Box({type: 'ToolBox', color: 'Blue'});
console.log(b);
// use implicit type definition by assignment
let b1 = new Box({type: 'GiftBox'});
console.log(b1);

let b2 = new Box({color: 'Black'});
console.log(b2);

let bb = new Box();
bb.type = 'ToyBox';
bb.color = 'Red';
console.log(bb);


// now inheritance 
class PaperBox extends Box {
    weight: number | undefined;

    constructor(attrs?: {type?: string, color?: string, weight: number}) {
        super(attrs);  // super constructor must be called in subclass constructor
        if (attrs && attrs.weight) {
            this.weight = attrs.weight;
        }
    }
}

let pb = new PaperBox({color: 'Green', weight: 12});
console.log(pb);


