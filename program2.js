var sum = 0;
var value = 0;
for(var a = 2; a < process.argv.length; a++) {
 //console.log(sum +" " + Number(process.argv[a]));
 sum = sum+ Number(process.argv[a]);
}
console.log(sum);
