

## install and compile

Install dependencies:

```sh
npm install 
# compile ts code
node_modules/.bin/gulp [default]
```

For `gulp-typescript` config, see `default` and `watch` tasks in [`gulpfile.js`](./gulpfile.js).

To enable gulp watch mode to track and compile on code change.
```bash
npm run gulp watch
```

## run ts-node on ts files

Use installed ts-node to run ts files in src folder:
```sh
./node_modules/.bin/ts-node src/basic-iterator.ts 
```


## run node on compiled js

Typescripts are compiled into `dist` folder.
For example, to run `greet.ts` script, run:

```bash
node dist/greet
```

## watch changed source file and auto compile

In `gulpfile.js` a watcher is defined for source files. Now running `gulp` in terminal is invoking a watch-compile process.

```bash
node_modules/.bin/gulp watch
```


## project scaffolding

Project scaffolding follows [official guide](https://www.typescriptlang.org/docs/handbook/gulp.html)
```sh
npm install --save-dev typescript gulp gulp-cli gulp-typescript ts-node
```
