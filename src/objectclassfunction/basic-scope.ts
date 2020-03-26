
/*

Scope in a programming language controls the visibility and lifetimes of 
variables and parameters.
Most programming languages have block scope, the variables defined in the 
block are released when execution of the block is finished.

But, javascript does not support block scope even though it has block syntax.
Instead, javascript has function scope. 
That means that the parameters and variables defined in a function are not 
visible outside of the function, and that a variable defined anywhere within
a function is visible everywhere within the function.
It also means a function has access to variables and parameters of the container 
context where the function is defined.

*/

// var vs let
// var is function scoped: a variable defined with 'var' makes it local to the 
// function where it is defined. If it is not in a function, it becomes globally
// accessible even it is nested in code blocks.

if (true) {
    var foo = 'foo';
}
console.log(foo);   // 'foo'

// on the other hand, let is block scoped, which is a subset of function scope
if (true) {
    let bar = 'bar';
}
try {
    console.log(bar);
} catch (e) {
    console.log(e);  // ReferenceError: bar is not defined
}

// by omitting 'var' or 'let' prefix, foo is defined as a global variable
function test() {
    foo = 'bar';
}
test(); // now foo is visible outside of function scope
console.log(foo);


// each function has its local binding scope
// each local scope can also see all the local scopes that contain it
// and since the 'top-level' local scope's containing scope is global scope,
// global scope is seen by all local scopes.

let gblVar = 'global';

let outerFun = function() {
    let outerVar = 'abc';

    let middleFun = function() {
        let middleVar = '123';
        let foo = 'bar';

        let innerFun = function() {
            let innerVar = new Date();
            // this shadows container scope var with the same name
            let foo = 'inner-bar';  

            // not only middleVar is seen, but also outerVar is also seen
            // the container scope awareness is cascaded from innermost all the way to the outermost
            return [foo, innerVar, middleVar, outerVar, gblVar].join(' <- ');
        }

        return innerFun();
    }

    return middleFun();
}

console.log(outerFun());


// local bindings are re-created every time a function is called
// This feature - being able to reference a specific instance of a local binding 
// in an enclosing scope — is called <em>closure</em>.
// A function that references bindings from local scopes around it is called a closure.

let localWrapper = function(n: any) {
    let lv = n;
    // return a new arrow function with binding to a container scoped var `lv`
    return () => lv;
}

// function values contain both the code in their body and the environment in 
// which they are <em>created</em>.
let wrp1 = localWrapper(1);
let wrp2 = localWrapper(2);

console.log(wrp1());   // => 1
console.log(wrp2());   // => 2

