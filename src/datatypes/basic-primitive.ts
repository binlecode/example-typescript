
// primitive is compared by value, not by reference
// this applies to string, number and boolean primitives
// instantiating a 'primitive' object (by new) is discouraged

let str1 = 'string';
console.log(str1 === 'string' ? 'equal' : 'not equal');

let strObj1 = new String('string');
console.log(strObj1 === 'string' ? 'strictly equal' : 'not strictly equal');
// loosely equal between referenced value and literal value
console.log(strObj1 == 'string' ? 'loosely equal' : 'not loosely equal');

// loose vs strict equality operator
// loose equality operator does implicit type conversation before comparison