
// javascript support object literal in `{}`

let obj = {
    name: 'foo',
    // have to wrap key with "" when the key has '-'
    "is-new": true
};

let obj2 = Object.create(obj);
console.log(obj2.name == 'foo')  // => true
console.log(obj === obj2); // => false


class Foo {
    name?: string;
}

let bar = (<any>Object).assign(new Foo(), {color: 'blue'});
console.log(bar); // => Foo { color: 'blue' }

// object assign can merge multiple objects to target receiver
let foo: Foo = {name: 'foo'};
// property with same name gets overwritten
let bar2 = (Object as any).assign(foo, {name: 'bar'}, {color: 'red'});
console.log(bar2);  // => { name: 'bar', color: 'red' }
// follow 'last one wins' rule for overlapping keys
let bar3 = (Object as any).assign(foo, {name: 'bar'}, {color: 'red'}, {color: 'white'});
console.log(bar3);  // => { name: 'bar', color: 'white' }



