var gulp 	= require('gulp'),
	uglify 	= require('gulp-uglify'),
	coffee	= require('gulp-coffee'),
	plumber = require('gulp-plumber')


gulp.task('uglify', function(){
	gulp.src('src/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});	

gulp.task('compilejs', function(){
	gulp.src('src/*.coffee')
	.pipe(plumber())
	.pipe(coffee({bare: true}).on('error', console.log))
	.pipe(gulp.dest('src/js'));
});

gulp.task('watch', function(){
	gulp.watch('src/*.coffee', ['compilejs']);
});

gulp.task('default', ['compilejs', 'watch']);