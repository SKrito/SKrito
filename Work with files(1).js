//task 1

const fs = require('fs');
function readFile(file){
    fs.readFile(file,'utf-8',(err,data)=>{
        console.log(data);
    });
}
readFile('Hello.txt');

//task 2

const fs=require('fs');
function createFile(file,content){
    fs.writeFile(file,content,()=>{
        console.log('the file has been created');
    });
}
createFile('new.txt', 'Hello my work');

//task 3

const fs = require('fs');

function appendingContent (file, content){
    fs.appendFileSync(file, content, () => {
    });
}
appendingContent('t.txt', ' This is new text');

//task 4

const fs = require('fs');

function deleteFileIfExists(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`File ${filePath} has been deleted.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File ${filePath} does not exist.`);
    } else {
      console.error(err);
    }
  }
}

deleteFileIfExists('text.txt');

//task 5

const fs = require('fs')

 function transferFile(sourse, target){
    try {
        fs.renameSync(sourse, target);
        console.log('the file has been moved');
     }
     catch (error) {
        console.log ('error');
     }
 }
 transferFile('./t.txt', './new/t.txt');
