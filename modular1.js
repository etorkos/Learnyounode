var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback){
	fs.readdir(dir, function (err, list){
		if (err) return callback(err)
		var filer = "."+ext;
		var data = [];
		for(var a=0; a<list.length; a++) {
			if(path.extname(list[a]) == filer) {
				data.push(list[a]);
			}
		}
		return callback(null, data)
	})
}
