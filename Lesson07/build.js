const { watch,series } = require('gulp')

function clean(cb){
    console.log("clean run")
    cb()
}

function javascript(cb){
    console.log("javascript run")
    cb()
}

function css(cb){
    console.log("css run")
    cb()
}

watch('src/*.css',{ delay:1000 },css)
watch('src/*.js',series(clean,javascript))

