var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var cache = require('gulp-cache');

gulp.task('stylus', function () {
    return gulp.src('app/styles/main.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/styles'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browserSync', 'stylus'], function () {
    gulp.watch('app/styles/*.styl', ['stylus']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('build', ['stylus'], function () {
    var buildCss = gulp.src([
        'app/styles/main.css'
    ])
        .pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('app/img/*.png')
        .pipe(gulp.dest('dist/img'));

});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);
