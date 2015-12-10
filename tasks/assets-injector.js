var inject = require('gulp-inject');

var paths = {
    javascript: [
        './www/js/app.js',
        './www/**/*.js',
        '!./www/lib/**'
    ],
    //css: [
    //    './www/**/*.css',
    //    '!./www/css/ionic.app*.css',
    //    '!./www/lib/**'
    //]
};

module.exports = function(gulp){

    // Inject automatically js to index.html
    gulp.task('gulp-inject', function(){
        return gulp.src('./www/index.html')
            .pipe(inject(
                gulp.src(paths.javascript,
                    {read: false}), {relative: true}))
            .pipe(gulp.dest('./www'));
            //.pipe(inject(
            //    gulp.src(paths.css,
            //        {read: false}), {relative: true}))
            //.pipe(gulp.dest('./www'));
    });

    gulp.task('gulp-inject-watch', function() {
        gulp.watch([
            paths.javascript,
            //paths.css
        ], ['gulp-inject']);
    });
};