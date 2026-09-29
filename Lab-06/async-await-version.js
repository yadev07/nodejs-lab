const fs = require('fs').promises;

async function copyContent() {
    try{
        const data = await fs.readFile('sample.txt', 'utf8');

        await fs.writeFile('copy_of_sample.txt', data);

        console.log('File Copied Successfully..!');
    }catch(err){
        console.error('Something went wrong: ', err.message);
    }
}

copyContent();