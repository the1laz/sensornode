var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var file        = require('gulp-file');

gulp.task('build',function() {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
  gulp.src('src/*.js').pipe(gulp.dest('dist'));
  gulp.src('src/*.css').pipe(gulp.dest('dist'));
  file('boards.json','{}',{src:true}).pipe(gulp.dest('dist'));
});


/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
.pipe(deploy())
//  return gutil.log('Gulp is running!')
});
