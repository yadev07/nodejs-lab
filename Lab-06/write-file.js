const fs = require('fs');

fs.writeFile('output.txt', 'Hello from Node.js', (err) => {
    if (err) throw err;
    console.log('File written successfully.');
});

//Content Overwritten on running twice.