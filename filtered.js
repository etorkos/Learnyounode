var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list){
	if (err) return console.error(err)
	var filer = "."+process.argv[3];
	for(var a=0; a<list.length; a++) {
		//console.log(path.extname(list[a]));

		if(path.extname(list[a]) == filer) {
			console.log(list[a]);
		}
	}
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