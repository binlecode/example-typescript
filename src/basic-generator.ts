// new in ES6, generator is a code construct that is able to pause
// and resume code execution inside a single function block

let gen1 = function* () {
    yield 'hello';
    yield '!';
    for (let c of 'generator') {
        yield c;
    }
    yield 'last value';
    return 'closing remark';
}
// generator function produces a generator object that implements the 
// Iterator interface, thus has .next() method
let g1 = gen1();
console.log(g1.next());  // { value: 'hello', done: false }
g1.next();
console.log(g1.next());  // { value: 'g', done: false }
// continue with a for loop, on the same generator object
// note that for-of loop ignores the value provided with 'return' message {done: true}
for (let c of g1) {
    console.log(c);
}

// yield is only allowed in a generator function
function* countDown(n: number) {
    while (n > 0) {
        yield n--;
    }
}
for (let n of countDown(3)) {
    console.log(n);
}
// Array.from can take a generator to form an array
let arr = Array.from(countDown(10));
console.log(arr); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// yield can be applied to an iterable object to sequentially
// generate one item at a time.
// the following two functions are equivalent:
function* yf1(lst: Array<any>) {
    yield* lst;
}
function* yf2(lst: Array<any>) {
    for (let i of lst) {
        yield i;
    }
}
for (let i of yf1([1, 2, 3])) {
    console.log(i);
};
for (let i of yf2([1, 2, 3])) {
    console.log(i);
};

// yield* can operate on a generator object, it can be used in recursive way
function* rgen(n: number) {
    if (n > 0) {
        yield* rgen(n - 1);
        yield n;
    }
}
for (let n of rgen(5)) {
    console.log(n);
}

