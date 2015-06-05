var gulp 	= require('gulp'),
	uglify 	= require('gulp-uglify'),
	coffee	= require('gulp-coffee'),
	gutil	= require('gulp-util');


gulp.task('uglify', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});	

gulp.task('compilejs', function(){
	gulp.src('src/*.coffee')
	.pipe(coffee({bare: true}).on('error', gutil.log))
	.pipe(gulp.dest('src/js'));
});

gulp.task('watch', function(){
	gulp.watch('./', ['compilejs', 'uglify']);
});

gulp.task('default', ['compilejs', 'watch']);