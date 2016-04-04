var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var file        = require('gulp-file');
var fs          = require('fs');
var path        = require('path');


function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

gulp.task('build',function() {
  gulp.src('docs/**/*').pipe(gulp.dest('pages'));
  var folders = getFolders('../boards');
  folders.map(function(folder){
    console.log(path.join('../boards',folder,'datasheet')));
  });
  file('boards.json','{boards:[\'Model A\']}',{src:true}).pipe(gulp.dest('pages/datasheet'));
});


/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
.pipe(deploy())
//  return gutil.log('Gulp is running!')
});
