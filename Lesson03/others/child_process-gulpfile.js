const { exec } = require('child_process')

function childProcessTask(){
    const result = exec('date')
    console.log("call date")
    return result
}

exports.default = childProcessTask