function callbackTask(cb) {
    // `cb()` should be called by some async work
    cb(new Error('kaboom'));
  }
  
  exports.default = callbackTask;