

interface MyIterator {
    next(): any;
    hasNext(): boolean;
    reset(): void;
}

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
