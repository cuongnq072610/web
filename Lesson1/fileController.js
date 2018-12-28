const fs = require('fs');

let readFile = (path)=> {
   return fs.readFileSync(path, 'utf-8');
}

let writeFile = (path, writeData, onWriteDataSuccess)=>{
    fs.writeFile(path, writeData, (err)=>{
        if(err) {console.log(err);}
        onWriteDataSuccess("Sucess");
    });
}
module.exports = {
    readFile,
    writeFile
}