const fs = require('fs');

const packageJson = require('./package.json')

async function asyncAwaitTask() {
//   const result = fs.readFileSync('package.json');
    const { version } = packageJson
  console.log(version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;