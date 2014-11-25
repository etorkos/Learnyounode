var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data){
	if (err) return console.error(err)
	console.log(data.split('\n').length-1);
})


/*
var buf = fs. readFile(process.argv[2]);
var length = buf.toString().split('\n').length;
console.log(length-1);

for(var a = 2; a < process.argv.length; a++) {
 //console.log(sum +" " + Number(process.argv[a]));
 sum = sum+ Number(process.argv[a]);
}
console.log(sum);
*/