var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var paths = {
    sass: ['./scss/**/*.scss']
};

module.exports = function(gulp){

    gulp.task('sass', function(done) {
        gulp.src('./scss/ionic.app.scss')
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest('./www/css/'))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest('./www/css/'))
            .on('end', done);
    });

    gulp.task('sass-watch', function(){
        gulp.watch(paths.sass, ['sass']);
    });
};