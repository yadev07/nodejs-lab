const fs = require('fs');

fs.unlink('output.txt', (err) => {
    if(err) throw err;
    console.log('File deleted successfully.')
});

//The error occurs because output.txt was already deleted during the first run, so the second run cannot find the file.
//The error will generally contain 'ENOENT' which means teh specified file/path doesn't exist.