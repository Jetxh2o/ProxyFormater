const fs=require('fs');
const fileName='proxies.txt';

const list=fs.readFileSync(fileName, 'utf8').split("\r\n").filter((value)=>{
    return value!='';
}).join(',');
console.log(list);
fs.writeFileSync(fileName, list);