'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var params = $.util.env;

var config = {
    src: {
        base: 'app',
        scripts: 'app/scripts',
        styles: 'app/styles'
    },
    dist: {
        base: 'dist',
        scripts: 'dist/scripts',
        styles: 'dist/styles'
    },
    autoprefixer: ['last 2 versions', 'Explorer >= 8', 'Firefox >= 25']
};

gulp.task('styles', function () {
    return $.rubySass(config.src.styles + '/*.scss', {
            precision: 10,
            sourcemap: false,
            loadPath: ['node_modules']
        })
        .on('error', function(error) {
            console.log(error);
        })
        .pipe($.plumber())
        .pipe($.autoprefixer(config.autoprefixer))
        .pipe($.cssmin())
        .pipe(gulp.dest(config.dist.styles))
        .pipe($.size({title: 'styles'}));
});

gulp.task('scripts', function () {
    return gulp.src([config.src.scripts + '/**/*.js'])
        .pipe($.plumber())
        .pipe(gulp.dest(config.dist.scripts))
        .pipe($.size({title: 'scripts'}));
});

gulp.task('html', function () {
    return gulp.src([config.src.base + '/**/*.html'])
        .pipe(gulp.dest(config.dist.base))
        .pipe($.size({title: 'html'}));
});

gulp.task('copy', function () {
    return gulp.src(config.src.base + '/CNAME')
        .pipe(gulp.dest(config.dist.base))
        .pipe($.size({title: 'copy'}));
});

gulp.task('clean', function (cb) {
    rimraf(config.dist.base, cb);
});

gulp.task('watch', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: './' + config.dist.base
        }
    });

    gulp.watch([config.src.images + '/**/*'], ['images']);
    gulp.watch([config.src.styles + '/**/*.scss'], ['styles']);
    gulp.watch([config.src.scripts + '/**/*.js'], ['scripts']);
    gulp.watch([config.src.base + '/**/*.html'], ['html']);

    browserSync.watch([config.dist.base + '/**/*']).on('change', browserSync.reload);
});

gulp.task('build', ['styles', 'html', 'scripts', 'copy']);

gulp.task('deploy', ['build'], function() {
    params.message = params.m || params.message;

    var options = {};
    options.message = params.message || 'Update ' + new Date();

    return gulp.src(config.dist.base + '/**/*')
        .pipe($.ghPages(options));
});

gulp.task('default', ['build']);
