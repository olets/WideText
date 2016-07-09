const gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('run', function() {
    return gulp.src("widetext.js")
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(rename("widetext.min.js"))
        .pipe(gulp.dest('./'));
});

gulp.task("default",['run'], function() {
    gulp.watch("widetext.js", ['run'])
});
