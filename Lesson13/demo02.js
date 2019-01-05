const Vinyl = require('vinyl');

const file = new Vinyl();
const notAFile = {};

console.log(Vinyl.isVinyl(file) );
console.log(Vinyl.isVinyl(notAFile));