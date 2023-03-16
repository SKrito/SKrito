const fs = require('fs');

function readFile(file){
    fs.readFile(file, 'utf-8', (err, data) => {
            console.log(data);
    });
}
readFile ('t.txt');
