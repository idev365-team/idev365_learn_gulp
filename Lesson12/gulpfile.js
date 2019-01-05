const { tree, series, parallel } = require('gulp');

function one(cb) {
  // body omitted
  cb();
}

function two(cb) {
  // body omitted
  cb();
}

function three(cb) {
  // body omitted
  cb();
}

const four = series(one, two);

const five = series(four,
  parallel(three, function(cb) {
    // Body omitted
    cb();
  })
);


module.exports = { 
    one, 
    two, 
    three, 
    four, 
    five,
    default : function(cb){
        console.log(tree({deep: true}))
        cb()
    } 
};


