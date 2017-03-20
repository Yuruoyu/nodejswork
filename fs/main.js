var fs = require("fs");
console.log("同步读取文件input.txt");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");