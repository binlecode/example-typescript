
// setTimeout allows for a callback to be scheduled to execute after a specified 
// amount of time. 
// The JavaScript runtime will schedule the callback for execution by pushing it 
// onto JavaScript’s message queue.
setTimeout(() => {
    console.log('hello async');
}, 500);
console.log('hello sync');

// Serializing asynchronous behavior was a common problem, usually solved by a 
// codebase full of nested callback functions, referred to as “callback hell.”

function delayedRun(ms: number, callback) {
    setTimeout(() => { callback() }, ms);
}

delayedRun(500, () => {console.log('hello run')});

// a more common pattern that includes both successuful (callback) and failure
function delayedRun2(ms: number, success, failure) {
    setTimeout(() => {
        try {
            success();
        } catch (ex) {
            failure(ex);
        }
    }, ms)
}
delayedRun2(600, 
    () => {
        throw new Error('callback is raising an error');
    },
    (e) => {
        console.log('caught error: ' + e);
    }    
);

// callback nesting becomes tricky when deal with data dependency between sync and async
// states (variables) and among (stacked) callbacks

function delayedTransform(x: number) {
    // with arrow function defined as callbacks, the context binding is at the function
    // body level, and is established when the function is called, not when timeout is 
    // triggered 
    setTimeout(() => { 
        let x2 = x * 2;
        console.log('callback input ' + x + ', doubled: ' + x2);
        setTimeout(() => {
            let x3 = x2 * 3;
            console.log('callback input: ' + x2 + ', tripled: ' + x3);
        }, 200);
    }, 200);
    console.log('input: ' + x);
}
let xin = 11;
// callback binding has x input as 11 when this function is called
delayedTransform(xin);
// this won't change callback binding x value in arrow function
xin = xin * 10;
console.log('input x changed to: ' + xin);

