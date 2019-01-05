const { registry,task,series } = require('gulp')
const FwdRef = require('undertaker-forward-reference')

registry(FwdRef())



task('default',series('forward-ref'))

task('forward-ref',function(cb){
    console.log("forward-ref--->2")
    cb()
})


