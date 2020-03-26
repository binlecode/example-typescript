
/*

In javascript, there are four patterns of invoking a function:
- method invocation: a function referred as a property in an object
- function invocation: function not as a property of an object
- constructor invocation: the `new` keyword pre-fixed invocation
- apply invocation: the 'apply' or 'call' method that comes with function object 

The invocation patterns differ in how the `this` binding is initialized.

In constructor invocation: a new object will be created with a hidden link to the 
value of the function’s prototype member, and this will be bound to that new object.

*/

// javascript methods are class properties that hold function values

let duck = {color: 'yellow'};

duck.quack = function(msg: string) {
    console.log(`this ${this.color} duck is quacking: ${msg}`);
}

// the object.method() binding resolves `this` to the bound object at call time.
duck.color = 'pink';
duck.quack('hello');  // => the pink duck... (not 'yellow duck...')

let blackDuck = {color: 'black'};
// this raises TypeError as quack is only bound to duck object
try {
    blackDuck.quack('abc');
} catch (e) {
    console.log('got typeError: ' + e); // TypeError: blackDuck.quack is not a function
}

// comparing to function call, first define a standard function

function speak(msg: any) {
    console.log(`this ${this.type} says: ${msg}`);
}

// makes `speak` function a method of duck object
let speackingDuck = {type: 'duck', speak: speak};
// method call has implicity binding of `this` pointing to the object
speackingDuck.speak('hello');
// if called as a function with explicit `.call`, `this` binding is passed in 
// as the first argument
speak.call(duck, 'hello');

// function way: function value is not among object properties
let dog = {type: 'dog'};
speak.call(dog, 'how are you');  

// method way: function value is among object properties
let fox = {type: 'fox', speak: speak};
fox.speak('cheers');

// in either case above, the binding of `this` is resolved at calling time

// if called without providing `this` binding, then `this` is undefined, because
// `this` is bound to the global scope, which is window object by default, where 
// we don't have a DOM defined in this case, thus it becomes undefined.
try {
    speak('bad call');
} catch (e) {
    console.log('error raised: ' + e); // TypeError: Cannot read property 'type' of undefine
}

// all regular functions have their own `this` binding, which is their container scope.
// arrow functions are different: they don't bind their own `this`, but instead look
// up the `this` binding of the scope around them.

let caseOfThisInArrow = {
    data: [1, 3, 5, 7, 9],
    // the arrow function references `this` from inside the local function
    demo: function() {
        // `demo` function has `this` binding to container object
        return this.data.filter(elm => {
            // arrow function sees the same `this` as the containing function
            console.log(`filtering: ${this.data}`);  // 1,3,5,7,9
            return elm > 3;
        });
    }
}
console.log(caseOfThisInArrow.demo());  // 5, 7, 9

// as a comparison, we choose to replace the inner arrow function with a regular function
let caseOfThisInFun = {
    data: [2, 4, 6, 8, 10],
    demo: function() {
        let superThis = this; // store container object `this` to a different local variable
        let ftr = function(elm: any) {
            // this will raise error as binding of `this` is outer function `demo`,
            // which doesn't have `data` property
            try {
                console.log(`filtering: ${this.data}`);
            } catch (e) {
                console.log('error: ' + e);
                // now use the work around `superThis` to access outer container scope
                console.log(`filtering: ${superThis.data}`);
            }
            return elm > 4;
        }
        return this.data.filter(ftr);
    }
}
console.log(caseOfThisInFun.demo());


