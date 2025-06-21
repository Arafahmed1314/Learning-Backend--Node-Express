
// const math = require('./math.js');
// console.log(math);

// console.log(math.add(2, 3));
const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello, World!');
// const result = fs.readFileSync('./c.txt', 'utf8')
// console.log(result);
fs.appendFileSync('hello.txt', `Hello ${Date.now()}, World!\n`);
