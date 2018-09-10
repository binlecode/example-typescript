import { sayHello } from './greet';

let name = 'typescript';

function hello(compiler: string) {
    console.log(sayHello(compiler));
}

hello(null);
hello(undefined);
hello(name);

console.log(hello instanceof Object);

console.log(Array.from(Array(5).keys()));



