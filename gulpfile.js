var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat');;

gulp.task('sass', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(maps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('rigger', function () {
    gulp.src('src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
});

gulp.task('scripts', function() {
    return gulp.src(['src/js/masonry/*.js', 'src/js/flickity/*.js', 'src/js/*.js'])
        .pipe(concat('main.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('copyStyles', function() {
    gulp.src('./src/css/*.*')
        .pipe(gulp.dest('build/css'));
});

gulp.task('copyImages', function() {
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('build/img'));
});

gulp.task('default', ['sass', 'watch']);
gulp.task('build', ['sass', 'rigger', 'copyStyles', 'copyImages', 'scripts']);
