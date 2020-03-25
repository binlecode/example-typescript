
/*
The main motivation for promises is to bring synchronous style error handling 
to Async / Callback style code.

A promise can be either resolved or rejected.
*/

Promise.resolve(123)
    .then(res => {
        console.log('got promise result: ' + res);
    });

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
        setTimeout(() => { resolve('late greeting'); }, ms);
    } );
}
console.log('waiting for greeting...');
let delayedGreeting = delayedPromise(1000)
    .then((res: string) => {
        console.log("got delayed greeting: " + res);
    });