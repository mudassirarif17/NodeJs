const path = require('path');

const a1 = path.extname('index.html');
const a2 = path.dirname('/foo/bar/baz/asdf/quux');

console.log(a2);
console.log(a1);