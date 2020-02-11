var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});


// add gulp watch to recompile detected source file changes

/*
In gulp 3.x you could just pass the name of a task to gulp.watch() like this:

gulp.task('watch', function() {
  gulp.watch('app/css/*.css', ['styles']);
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/img/*', ['images']);
});
In gulp 4.x this is no longer the case. You have to pass a function. The customary way of doing this in gulp 4.x is to pass a gulp.series() invocation with only one task name. This returns a function that only executes the specified task:

gulp.task('watch', function() {
  gulp.watch('app/css/*.css', gulp.series('styles'));
  gulp.watch('app/js/*.js', gulp.series('scripts'));
  gulp.watch('app/img/*', gulp.series('images'));
});
*/

gulp.task('watch', function() {
    gulp.watch("src/**/*.ts", gulp.series('default'));
});



