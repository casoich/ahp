var gulp    = require('gulp'),
  less      = require('gulp-less'),
  usemin    = require('gulp-usemin'),
  wrap      = require('gulp-wrap'),
  connect   = require('gulp-connect'),
  watch     = require('gulp-watch');

var paths = {
  js: 'src/js/**/*.*',
  fonts: 'src/fonts/**.*',
  images: 'src/img/**/*.*',
  styles: 'src/less/**/*.{less,css}',
  index: 'src/index.html',
  panes: 'src/panes/**',
  bios: 'src/bios/*',
  favicon:'src/favicon.ico',
  bower_fonts: 'src/bower_components/**/*.{ttf,woff,eof,svg}',
  bower_components: 'src/bower_components/**/*.*'
};


gulp.task('usemin', function() {
  return gulp.src(paths.index)
    .pipe(usemin({
      less: ['concat', less()],
      js: ['concat', wrap('(function(){ \n<%= contents %>\n})();')]
    }))
    .pipe(gulp.dest('dist/'));
});

/**
 * Copy assets
 */
gulp.task('copy-assets', ['copy-images','copy-favicon','copy-panes', 'copy-bios', 'copy-fonts', 'copy-bower_fonts']);

gulp.task('copy-images', function(){
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-favicon', function(){
  return gulp.src(paths.favicon)
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-panes', function(){
  return gulp.src(paths.panes)
    .pipe(gulp.dest('dist/panes'));
});

gulp.task('copy-bios', function(){
  return gulp.src(paths.bios)
    .pipe(gulp.dest('dist/bios'));
});

gulp.task('copy-fonts', function(){
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-bower_fonts', function(){
  return gulp.src(paths.bower_fonts)
    .pipe(gulp.dest('dist/lib'));
});

/**
 * Watch src
 */
gulp.task('watch', function () {
  gulp.watch([paths.styles, paths.index, paths.js], ['usemin']);
  gulp.watch([paths.images], ['copy-images']);
  gulp.watch([paths.panes], ['copy-panes']);
  gulp.watch([paths.bios], ['copy-bios']);
  gulp.watch([paths.fonts], ['copy-fonts']);
  gulp.watch([paths.bower_fonts], ['copy-bower_fonts']);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src(['dist/**/*.*'])
    .pipe(watch())
    .pipe(connect.reload());
});

/**
 * Compile less
 */
gulp.task('compile-less', function(){
  return gulp.src(paths.styles)
      .pipe(less())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['usemin', 'copy-assets']);
gulp.task('default', ['build', 'webserver',  'watch']);
