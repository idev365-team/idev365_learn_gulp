const fs = require('fs')

function passingCallback(cb){
    fs.access('gulpfile.js',function(err){
        console.log(err)
        cb(err)
    })
}

exports.default = passingCallback