var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

// add gulp watch to recompile detected source file changes
gulp.watch("src/**/*.ts", ["default"]);

/*
// another way is to define a watch task. in this way the task is run as: 'gulp watch'
gulp.task('watch', function(){
  gulp.watch('<file-list>', ['default']); 
  // add other watchers
});
*/