'use strict';

var file, msg = '**/*-test.js';
process.argv.forEach(function (val, index, array) {
    if (val === '-file' || val === '--f') {
        let env_val = array[index + 1];
        msg = '**/*' + env_val+ '*-test.js';
        file = env_val;
    }
});

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    appRoot = process.cwd(),
    paths = {
        js: [
            appRoot + '/index.js',
            appRoot + '/lib/**/*.js'
        ]
    };
var defaultTasks = ['env:test', 'test:eslint', 'test:coverage'];

gulp.task('env:test', function () {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    process.env.NODE_ENV = 'test';
    process.env.running_under_istanbul = true;
    console.log('use => load tests: ', msg);
});

gulp.task('test:eslint', function () {
    return gulp.src(paths.js)
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
});

gulp.task('test:coverage', ['test:eslint'], function () {
    let executeTests = function () {
        let path = '/test/**/*' + (file ? file + '*' : '') + '-test.js';
        gulp.src([appRoot + path])
            .pipe(plugins.mocha({
                reporters: 'spec'
            }))
            .pipe(plugins.istanbul.writeReports({
                reports: ['lcovonly']
            })); // Creating the reports after tests runned
    };

    // instrumentation
    gulp.src(paths.js)
        .pipe(plugins.istanbul({
            includeUntested: true

        })) // Covering files
        .pipe(plugins.istanbul.hookRequire())// Force `require` to return covered files
        .on('finish', () => executeTests());

});

gulp.task('test', defaultTasks);