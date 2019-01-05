const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

function copy(cb){
    return src('input/**/*.js', { sourcemaps: true })
        .pipe(uglify())
        .pipe(dest('output/', { sourcemaps: 'maps/' }));
}

exports.default = copy