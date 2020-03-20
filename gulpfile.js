const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task(
    'dev',
    gulp.series(
        buildHandlebars,
        buildScripts,
        buildStyles,
    ),
);

function buildHandlebars() {
    return gulp.src(['src/**/*.hbs'])
        .pipe(gulp.dest('dis'));
}

function buildScripts() {
    return gulp.src(['src/**/*.js'])
        .pipe(gulp.dest('dis'));
}

function buildStyles() {
    return gulp.src(['src/styles/index.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dis'));
}