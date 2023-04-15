const { task, src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');


task('js', () => {
   return src('./src/main.js')
      .pipe(babel({
         presets: ['@babel/env']
      }))
      .pipe(minify())
      .pipe(dest('dist'))
})

task('minify-css', () => {
   return src('./src/main.css')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(dest('dist'));
});

task('default', series('js', 'minify-css'));

task('watch', () => {
   watch('./src/main.js', series('js'))
   watch('./src/main.css', series('minify-css'))
})