
// since es5 (2009), javascript supports class getter and setter

// define in object literal
let foo = {
    name: 'foo',
    _age: -100,
    get age() {
        return this._age * -1;
    },
    // age can not be changed, thus no setter
}
console.log("foo's age: " + foo.age);

// add getter setter to an existing object
Object.defineProperty(foo, 'label', {
    get() {
        return `our greatest ${this.name}`;
    },
    set(lbl: string) {
        if (lbl) {
            this.name = lbl.toUpperCase();
        }
    }
})
// setter supports '=' assignment operator
foo.label = 'bar';
console.log("foo's label: " + foo.label); // => our greatest BAR

// BUT, you can still access _age property defined in literal, because javascript
// does not support private or protected class members
console.log("foo's secrete age: " + foo._age);

// Typescript supports 'private' keyword in class property definition, 
// but that support is only offering tsc compiling error check.

export class Foo {
    private _size: number;

    color: string;

    constructor(color: string, size: number) {
        this.color = color;
        this._size = size;
    }

    get size() {
        if (this._size > 10) {
            return 'big';
        } else if (this._size < 5) {
            return 'small';
        } else {
            return 'medium';
        }
    }
}

let f = new Foo('red', 12);
console.log("f's size: " + f.size);
// only compiler error, the compiled js code still runs and returns value
// which means typescript class member is not truly private or protected
console.log("f's secret size: " + f._size);

// truly private property is not supported, until ES 2019, by '#' prefix
