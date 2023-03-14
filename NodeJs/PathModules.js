// create a path object
const path = require('path');
//const pathObj = path.parse(__filename);
//const pathObj = path.extname(__dirname);
// const pathObj = path.join(__dirname, 'server', 'index.html');
const pathObj = path.basename(__dirname);
console.log(pathObj);

