
/*
A “promise” is a surrogate entity that acts as a stand-in for a result that does not 
yet exist. 
The main motivation for promises is to bring synchronous style error handling 
to Async / Callback style code.

A promise is a stateful object that can exist in one of three states:
- Pending
- Fulfilled (aka resolved): fulfilled state has an internal 'value'
- Rejected: rejected state has an internal 'reason'
The state of a promise is private and cannot be directly inspected in JavaScript, and
the state of a promise cannot be mutated by external JavaScript.

*/

Promise.resolve(123)
    .then(res => {
        console.log('got promise result: ' + res);
    });
// Promise itself can also serve as a constructor
// below is equivalent to Promise.resolve(123)
new Promise((resolve, reject) => {
    resolve(123);
}).then(res => {
    console.log('got promise result: ' + res);
})

// A promise can be either resolved (action finished successfully) or rejected (it failed).
// The resolved value might already be there or might appear at some point in the future.
// The rejected value usually is called the reason of rejection.

Promise.reject(new Error('promise error'))
    .catch((err: Error) => {
        console.log('got promise rejection:' + err);
    });

// chaining
Promise.resolve(new Date())
    .then(res => {
        console.log('time now is: ' + res);
        res.setDate(res.getDate() + 1);
        return res;
    })
    .then(res => {
        console.log('same time tomorrow is: ' + res);
        // a synchronous errors thrown in a then (or catch) result in the returned promise to fail
        throw new Error('there is an error in processing chain');
    })
    .catch((err: Error) => {
        console.log('an error is thrown: ' + err);
        return err.message;
    })  // the catch return actually creates a new promise
    .then(res => {
        console.log('relayed error message: ' + res);
    });

// it is recommened to translate a traditional callback to a promise return, and
// then handle promise resolve or rejection in .then or .catch blocks.

// for example, setTimeout assumes a callback pattern
// so we can wrap it in a promise
function delayedPromise(ms: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('late hello'); }, ms);
    } );
}
let delayedGreeting = delayedPromise(1000)
    .then((res: string) => {
        console.log("got delayed greeting: " + res);
    });
