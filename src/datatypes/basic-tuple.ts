// tuple

// tuple is supported in typescript
// typescript tuple is defined as an array with fixed lenth of elements of known types
let tpl = ['abc', 123];

let [telm1, telm2] = tpl;
console.log(`elm1: ${telm1}, elm2: ${telm2}`);

let tpl2: [string, number] = ['nice', 999];
// accessing elements in tuple follows the same way as array
console.log(tpl2[0]);
// loop the same as array
tpl2.forEach(elm => console.log(elm));
