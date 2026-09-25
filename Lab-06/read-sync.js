// Synchrounous 
const fs = require('fs');

const data = fs.readFileSync('sample.txt', 'utf8');
console.log(data);
console.log('This Line runs AFTER the file content is printed.');
