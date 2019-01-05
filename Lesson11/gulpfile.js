const { watch,task } = require('gulp')

function watckTask(){
    watch(['input/*.js','!input/something.js'],function(cb){
        console.log("watched file change!!!!")
        cb()
    })
}

task('build',function(cb){
    console.log("构建Building...")
    cb()
})

exports.watchTask = watckTask
