const { src,dest } = require('gulp')

function steamTask(){
    return src('*.js')
        .pipe(dest('output'))
}

exports.default = steamTask