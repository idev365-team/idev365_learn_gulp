const { src,dest } = require('gulp')

function copy(){
    return src(['input/*.js','src/*.js'])
        .pipe(dest('output/'))
}

exports.copy = copy
