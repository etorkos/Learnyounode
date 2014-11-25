var fs = require('fs');

var buf = fs. readFileSync(process.argv[2]);
var length = buf.toString().split('\n').length;
console.log(length-1);
/*
for(var a = 2; a < process.argv.length; a++) {
 //console.log(sum +" " + Number(process.argv[a]));
 sum = sum+ Number(process.argv[a]);
}
console.log(sum);
*/