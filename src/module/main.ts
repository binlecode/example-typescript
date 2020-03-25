import { sayHello } from './greet';

let name = 'typescript';

function hello(compiler: string) {
    console.log(sayHello(compiler));
}

hello(name);

console.log(hello instanceof Object);

console.log('gulp is watching!');
