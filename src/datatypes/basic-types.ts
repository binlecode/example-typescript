// string
//
// string interpolation, supports multiple lines
let message = `hello there, now is ${new Date()}
and this is a second line`;
console.log(message);

// null
//
// in javascript, null is of type 'object', this is generally regarded as a bad language design
console.log(typeof null); // => object
// null represents an empty or non-existing value, but it must be assigned
let a = null;
console.log(a == undefined);  // => true, javascript double-equal does type coersion
console.log(a === undefined); // => false

// undefined
//
// undefined means a variable that is declared but not defined
let x;
console.log(typeof x);  // => undefined
// undefined can be assigned, but usually not explicitly coded this way...
x = undefined;
console.log(typeof x);  // => undefined

// typeof operator
// the list of possible returned values are: 
// number, string, boolean, function, object, and undefined
// note that 'object' will be returned for null, array, and any other javascript object.
// note that 'undefined' is only returned for undefined variable
