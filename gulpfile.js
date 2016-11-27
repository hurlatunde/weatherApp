var gulp          = require('gulp');
var babel         = require('gulp-babel');
var sourcemaps    = require('gulp-sourcemaps');
var concat        = require('gulp-concat');
var newer         = require('gulp-newer');
var plumber       = require('gulp-plumber');
var browserSync   = require('browser-sync');
var uglify        = require('gulp-uglify');
var pump          = require('pump');

var appSrc = 'builds/development/',
    jsxSrc = 'process/jsx/';

gulp.task('html', function () {
    gulp.src(appSrc + '**/*.html');
});

gulp.task('css', function () {
    gulp.src(appSrc + '**/*.css');
});

// gulp.task('compress', function (cb) {
//     pump([
//             gulp.src(appSrc + 'js/app/*.js'),
//             uglify(),
//             gulp.dest(appSrc + 'js/app/')
//         ],
//         cb
//     );
// });

gulp.task('concat', function () {
    return gulp
        .src(jsxSrc + '**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({
            // npm install gulp-babel babel-plugin-transform-react-jsx
            plugins: ['transform-react-jsx']
        }))
        .pipe(concat('weather_app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appSrc + 'js/app/'));
});

gulp.task('copylibs', function () {
    return gulp
        .src([
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js'
        ])
        .pipe(gulp.dest(appSrc + 'js/lib/react'));
});

gulp.task('watch', function () {
    gulp.watch(jsxSrc + '**/*.{js,jsx}', ['concat']);
    gulp.watch(appSrc + 'css/*.css', ['css']);
    gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('browsersync', function () {
    browserSync({
        server: {
            baseDir: appSrc
        },
        open: false,
        online: false,
        notify: false,
    });
});

gulp.task('default', ['browsersync', 'watch', 'copylibs', 'concat']);