

## project scaffolding with Gulp

Project scaffolding follows [official guide](https://www.typescriptlang.org/docs/handbook/gulp.html)

Essentially after npm init:

```bash
# install gulp locally
npm install gulp-cli
npm install --save-dev typescript gulp gulp-typescript
```

For `gulp-typescript` config, see `default` and `watch` tasks in [`gulpfile.js`](./gulpfile.js).

To enable gulp watch mode to track and compile on code change.
```bash
npm run gulp watch
```

## compile

At project root folder, run:
```bash
node_modules/.bin/gulp [default]
```

## run node on compiled js

Typescripts are compiled into ```dist``` folder.
For example, to run ```greet.ts``` script, run:

```bash
node dist/greet
```

## watch changed source file and auto compile

In ```gulpfile.js``` a watcher is defined for source files. Now running ```gulp``` in terminal is invoking a watch-compile process.

```bash
node_modules/.bin/gulp watch
```
