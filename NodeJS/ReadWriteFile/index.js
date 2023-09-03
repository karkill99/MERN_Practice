const fs = require("fs");

fs.writeFileSync('readWrite.txt', 'hello NodeJS');
fs.appendFileSync("readwrite.txt", " i am kartik")

const buf_data = fs.readFileSync("readWrite.txt");

const orgData = buf_data.toString();

console.log(orgData);
fs.renameSync("readWrite.txt", "readWrite.txt");



