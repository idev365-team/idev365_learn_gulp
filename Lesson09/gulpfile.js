const { watch,lastRun,src, symlink,dest,series } = require('gulp')

function link(){
    return src('input/*.js')
        .pipe(symlink('output/'))
}


function copy(){
    return src('input/*.js')
        .pipe(dest('output/'))
}


function test(cb){
    console.log(lastRun(link))
    cb()
}

function watchTask() {
    watch('input/*.js', series(copy,test));
  }
exports.watchTask = watchTask
exports.test = test
exports.default = link