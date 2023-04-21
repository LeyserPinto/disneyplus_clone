const gulp      = require('gulp');
const sass      = require('gulp-sass')(require('sass'));
const imagemin  = require('gulp-imagemin');

/**
 * Build estilos 
 * @returns gulp_function
 */
function baked_styles () {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}
/**
 * Comprime as Imagens
 * @returns gulp_function
 */
function image_min () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(baked_styles, image_min);
exports.watch   = function () {
    gulp.watch("./src/styles/*.scss", gulp.parallel(baked_styles));
}