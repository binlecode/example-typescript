
// each function has its local binding scope
// ach local scope can also see all the local scopes that contain it
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
    // return a new arrow function with binding to container scope var `lv`
    return () => lv;
}

// function values contain both the code in their body and the environment in 
// which they are <em>created</em>.
let wrp1 = localWrapper(1);
let wrp2 = localWrapper(2);

console.log(wrp1());   // => 1
console.log(wrp2());   // => 2

