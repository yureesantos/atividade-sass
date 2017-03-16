var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

gulp.task("sass", function(){
	return gulp.src("./source/scss/**/style.scss")
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest("./dist/css"));
});

gulp.task("htmlminify", function(){
	return gulp.src("./source/index.html")
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("sass:watch", function(){
	gulp.watch("./source/scss/**/*.scss", ['sass']);
});

gulp.task("html:watch", function(){
	gulp.watch("./source/index.html", ['htmlminify']);
});

gulp.task('default', ['sass:watch', 'html:watch', 'sass', 'htmlminify']);
