const { Observable } = require('rxjs')

function observabelTask(){
    return Observable(1,2,3)
}

exports.default = observabelTask