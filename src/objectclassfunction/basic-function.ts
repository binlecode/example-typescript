
// a function always returns a value. If the return value is not specified, then undefined is returned
function hello(): void {}
console.log(hello());  // => undefined

// it is always recommend to explicit specify void as return type for 
// function that doesn't return a value
function returnNoValue(name: string): void {
    console.log(`${name} returns no value`);
}

// dynamic type inference for function return
function add(x: any, y: any) {
    return x + y;
}

console.log(add('abc', 123));  // 'abc123'
console.log(typeof add(123, 'abc'));  // 'string'
console.log(typeof add(1, 2));      // 'number'

let seed = 123;

// return type is inferred from return statement in the funciton body
let addToSeed = function(x: string, y: number) {
    return x + y + seed * 2;  // function sees enclosing scope
}

console.log(addToSeed('a', 100000));

let addAllTogether = function(fst: number, snd: number, ...theRest: number[]) {
    // array reduce() takes an anonymous arrow function as first argument
    return fst + snd + theRest.reduce((a, b) => a + b, 0);  
}
console.log(`add all together: ${addAllTogether(1, 2, 3, 4, 5)}`);
// ...argument can be optional in functional call
console.log(`add all together: ${addAllTogether(1, 2)}`);  // 1 + 2 => 3

// Optional parameters must be located after any required parameters in the parameter list
function greet(title: string | null | undefined, name?: string | null) {
    console.log(`hello ${title} ${name ? name : 'there'}`);
}

greet('Mr.', 'typescript');  // hello Mr. typescript
greet(null, 'javascript');  // hello null javascript
greet(null, null);          // hello null there
greet(null);                // hello null there
greet(undefined);           // hello undefined there


// default argument is implicitly optional argument
function greet2(title: string, name: string = 'there') {
    console.log(`hye ~ ${title} ${name.toUpperCase()}`);
}
greet2('Mrs.', 'Baker');
greet2('Dr.');
greet2('Officer', undefined);
//todo: need to catch the error below because null is a 'value' in javascript...
try {
    greet2('Officer', undefined);  // this will throw TypeError: Cannot read property 'toUpperCase' of null
} catch (e) {
    console.log(`got error: ${e.name} - ${e.message}`);
}




