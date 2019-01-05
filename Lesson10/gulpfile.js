const { series,parallel } = require('gulp')

function clean(cb){ 
    cb()
}

function css(cb){ 
    cb()
}

function javascript(cb){ 
    cb()
}

exports.default = series(clean,parallel(css,javascript))