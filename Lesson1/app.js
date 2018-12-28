// const fs = require('fs');

// // khong can goi call back vi khi doc file xong moi ghi file k bi trung` nhau
// let dataFromFile = fs.readFileSync('./package.json', {encoding:'utf-8'});
// console.log(dataFromFile); 

// // can ham call back vi neu khong co call back thi no se vua doc vua ghi se bi loi
// // let dataFromFileAsync = fs.readFile('./package.json', {encoding:'utf-8'}, (err, data) => {
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log(data);
// // });
// // console.log(dataFromFileAsync);

// // tuong tu vs writeFile va writeFileSync
// // let dataWriteFile = "Hello, it's writeFile";
// // fs.writeFile('text.txt', dataWriteFile, (err)=>{
// //     if(err) console.log(err);
// //     console.log("Write file done!");
// // })

// // let dataObjWriteFile = {
// //     a: 5,
// //     b: 6
// // }
// // fs.writeFile('text.txt',JSON.stringify(dataObjWriteFile) , (err)=>{
// //     if(err) console.log(err);
// //     console.log("Write file done!");
// // });

// let readText = JSON.parse(fs.readFileSync('text.txt','utf-8')).a;
// console.log("Data: " + readText);

const express = require('express');
let app = express();

app.get('/',(req, res) => {
    res.sendfile(__dirname+'/index.html');
});

app.get('/wow',(req, res) => {
    res.send("Hello world the second!!!");
});

app.listen(6969, (err)=> {
    if(err){console.log(err);}
    console.log("Connected sucess at port 6969");
});