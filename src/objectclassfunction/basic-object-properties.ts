
// since es5 (2009), javascript supports class getter and setter

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
// if the following line is uncommented, there will be a compiler error, 
// the compiled js code still runs and returns value
// which means typescript class member is not truly private or protected
//console.log("f's secret size: " + f._size);

// truly private property is not supported, until ES 2019, by '#' prefix
