/*write data
const fs = require("fs");
fs.writeFileSync("data.txt","hellow");
//write data without overwritting
fs.appendFileSync("data.txt"," world");*/

/*read data
const fs = require("fs");
const data=fs.readFileSync("data.txt");
console.log(data.toString())*/

/* viwe momory capasity
const os = require('os');
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());*/

/*write data in json file 
import fs from 'fs';
const guests=[];
guests.push({
    name:"chamod",
    address:"kegalle"
})
const data = JSON.stringify(guests)

fs.writeFileSync("j_data.json",data);*/

/*read json file
import fs from 'fs';
const databuffer=fs.readFileSync("j_data.json");
const jdata= databuffer.toString();
const data= JSON.parse(jdata)
console.log(data);
console.log(data[0]);
console.log(data[0].name);*/