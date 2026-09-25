//Reading the File Asynchronously
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error Reading File: ', err);
    }
    console.log(data);
});

console.log('This Line Runs BEFORE the file Content is printed.');