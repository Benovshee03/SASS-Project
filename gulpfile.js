const {src, dest, watch, series} = require('gulp')

const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('sass/index.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

// index.scss folderinde buildStyles fukisyasn; ishlet

function watchTask(){
    watch(['sass/index.scss'], buildStyles);
}
exports.default = series(buildStyles,watchTask);