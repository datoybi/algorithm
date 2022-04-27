var fs = require("fs");

var text = fs.readFileSync("text.txt", "utf8");
console.log(text);
