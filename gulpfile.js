const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');


gulp.task('watch', () => {

    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.pug', ['pug']);

});

gulp.task('sass', () => {
    sass('src/sass/style.scss', {
        sourcemap: true,
        style: 'compressed'
    })
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload())
});

gulp.task('pug', () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
});

gulp.task('connect', () => {
    connect.server({
        port: 8000,
        root: './',
        livereload: true
    })
});

gulp.task('default', ['connect', 'watch']);
