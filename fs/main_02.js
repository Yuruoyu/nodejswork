var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
	console.log("回调函数执行");
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");