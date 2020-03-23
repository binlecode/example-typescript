
let myLst = new Array(10);
console.log(myLst);

// show the difference between for-in and for-of iterators
let list = [4, 5, 6];

// for-in iterats keys of object, for list, it's the index value
for (let i in list) {
   console.log(i); // "0", "1", "2",
}
// for-of iterates elements of object, and only work with iterable objects like array or string
for (let i of list) {
   console.log(i); // "4", "5", "6"
}

let myObj = {k1: 'v1', k2: 123, k3: false};
for (let key in myObj) {
    console.log(`key: ${key} => value: ${(<any>myObj)[key]}`); // cast to any to avoid index signature missing error
}
// this will not get into loop as myObj is actually not iterable
for (let elm of <any>myObj) {  // will get compilation error if not cast with <any>
    console.log(`elm: ${elm}`);
}

