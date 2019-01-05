const { series } = require('gulp')

function preBuildInfo(cb){
    console.log("当前编译环境:",process.env.NODE_ENV)
    cb()
}

function minify(cb){
    cb()
}

function transpile(cb){
    cb()
}

function livereload(cb){
    cb()
}

if(process.env.NODE_ENV === 'production'){
    exports.build = series(preBuildInfo,transpile,minify)
}else{
    exports.build = series(preBuildInfo,transpile,livereload)
}