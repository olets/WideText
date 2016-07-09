const	gulp = require('gulp'),
		plumber = require('gulp-plumber'),
		rename = require('gulp-rename'),
	    uglify = require('gulp-uglify');

gulp.task("default", function(){
  return gulp.src("widetext.js")
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(uglify({
    	preserveComments: 'license'
    }))
    .pipe(rename("widetext.min.js"))
    .pipe(gulp.dest('./'));
});