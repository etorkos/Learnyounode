var fs = require('fs');
var path = require('path');
var mymodule = require('./modular1.js')

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir,ext, function(err, list){
	if(err) throw err
	for(var a=0; a<list.length; a++){
		console.log(list[a]);
	}

})

