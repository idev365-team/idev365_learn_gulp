const { EventEmitter }  = require('events')

function eventEmitterTask(){
    const emitter = new EventEmitter()
    setTimeout(()=>emitter.emit('finish'),1000)
    return emitter
}

exports.default = eventEmitterTask