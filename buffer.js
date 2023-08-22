

buf = new Buffer.alloc(30);
len = buf.write("Simply Easy Learning english");

console.log("Octets written : "+ len);


//syntax to read data from node buffer
//buf.toString([encoding][, start][, end]) 
buf = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
 buf[i] = i + 97;
}
console.log( buf.toString('ascii')); 
console.log( buf.toString('ascii',0,5)); 
// outputs: abcde
console.log( buf.toString('utf8',0,5)); 
// outputs: abcde
console.log( buf.toString(undefined,0,5));
// encoding defaults to 'utf8', outputs abcde

var buffer1 = new Buffer("tutorialspoints");
//copy a buffer


buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());