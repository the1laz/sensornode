var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
//    .pipe(deploy({build:false,remoteUrl:"https://github.com/the1laz/sensornode"}))
//    .pipe(deploy({push:false}))
//  return gutil.log('Gulp is running!')
});
