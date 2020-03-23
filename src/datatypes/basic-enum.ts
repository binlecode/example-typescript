// enum is defined and used similarly as javascript
// in most cases for a fixed set of values

// this enum is defined with some values assigned by custom index
enum CLR {RED, GREEN, YELLOW = 3, BLACK, PINK}

console.log(CLR.RED);  // output => 0
console.log(CLR[2]); // output => undefined
for (let idx in CLR) {
    console.log(CLR[idx]);  // output 0 1 3 4 5, there's NO 2!
}
