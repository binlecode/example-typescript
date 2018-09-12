

## project scaffolding
project scaffolding follows [offical guide](https://www.typescriptlang.org/docs/handbook/gulp.html)

## first things first
In general, create a vanilla TS project directory, execute the following commands:

```bash
npm init --y
tsc --init
```

The above two commands should leave us with a package.json file as well as a tsconfig.json file

## compile
At project root folder, run:
```bash
gulp
```
Typescripts are compiled into ```dist``` folder.
For example, to run ```greet.ts``` script, run:
```bash
node dist/greet
```

## watch changed source file and auto compile
In ```gulpfile.js``` a watcher is defined for source files. Now running ```gulp``` in terminal is involking a watch-compile process.