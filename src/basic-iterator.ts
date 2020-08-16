/*

An object is deemed iterable if it has an implementation for the `Symbol.iterator` property. 
Some built-in types like Array, Map, Set, String, Int32Array, Uint32Array, etc. have their 
`Symbol.iterator` property already implemented. 
`Symbol.iterator` function on an object is responsible for returning the list of values to 
iterate on.

*/

// first, let's try a mechanical home-made iterator interface to support iteration
interface MyIterator {
    next(): any;
    hasNext(): boolean;
    reset(): void;
}
// a mechanical custom iterable interface
interface MyIterable {
    iterator(): MyIterator;
}

class MyIterableImpl implements MyIterable {

    constructor(private myData: any[] = []) {
    }

    iterator(): MyIterator {
        return this.myIterator;
    }

    /**
     * iterator property defined as an inner class implementing the Iterator interface
     */
    myIterator: MyIterator = new class {
        // inner class constructor has input argument of container class
        constructor(public superThis: MyIterableImpl) {
        }
        private pointer = -1;
        public next() {
            if (this.hasNext()) {
                this.pointer += 1;
                return this.superThis.myData[this.pointer];
            } else {
                return null;
            }
        }
        public hasNext(): boolean {
            let pkIdx = this.pointer + 1;
            return this.superThis.myData.length > pkIdx;
        }
        public reset(): void {
            this.pointer = -1;
        }
    }(this);
}

let myIterable: MyIterable = new MyIterableImpl([3, 7, 9, 45]);
let myIter = myIterable.iterator();

console.log(myIter.next());
myIter.next();
console.log(myIter.next());
// reset iterator
console.log('iterator pointer reset');
myIter.reset();
while (myIter.hasNext()) {
    console.log(myIter.next());
}

/**
 * A (common) practice of implementing a custom iterable class is implement
 * [Symbol.iterator] interface that returns an iterator object that has:
 * - next() method
 * - return() method [optional], support early termination like 'break'
 * this iterator filters out all non-number and negative numbers from interation
 */
class CustomIterable {
    private data: Set<any>;

    constructor(data: Array<any> | Set<any>) {
        this.data = new Set(data);
    }

    
    [Symbol.iterator]() {
        let lst = Array.from(this.data);
        let sz = lst.length;
        console.log('length: ' + sz);
        let idx = 0;
        return {
            next: () => {
                let n = lst[idx++];
                while (n) {
                    console.log('... idx: ' + idx + ', typeof n: ' + (typeof n) + ', value of n: ' + n);
                    if ((typeof n) == 'number' && n > 0) {
                        break;
                    }
                    n = lst[idx++];
                }

                if (n) {
                    return { done: false, value: n };
                } else {
                    return { done: true };
                }
            },
            return() {
                console.log('... break early')
                return { done: true };
            }
        };
    }
}

let ci = new CustomIterable([3, 'abc', -12, 11, 34, -5, 11, true, 28, -4, new Date(), 7]);
// loop through the whole set
for (let i of ci) {
    console.log('positive number: ' + i);
}
// early termination
for (let i of ci) {
    if (i >= 10) {
        console.log('stop iteration on getting first >= 10 nubmer: ' + i);
        break;
    }
    console.log('gettting <10 number: ' + i);
}


// now implement *[Symbol.iterator] as generator

class MyBag {
    items: any[] = [];

    constructor(data: any[]) {
        if (data.length > 0) {
            this.items = data;
        }
    }

    *[Symbol.iterator]() {
        let max = this.items.length;
        let idx = 0;
        while (idx < max) {
            yield this.items[idx++];
        }
    }
}

let mb = new MyBag(['apple', 'pen', 'laptop', 'usb-drive']);
for (let item of mb) {
    console.log('bag has item: ' + item);
}
