var fs =require("fs");
var zlib= require("zlib")

// encoding defines the type of encoding while reading and highWaterMark is the size of chunks 

var readable= fs.createReadStream(__dirname+"/loremipsum.txt",{encoding:"utf8",highWaterMark:16 *1024});
var writable=fs.createWriteStream(__dirname+"/loremipsumcopy.txt")
readable.on("data",function(chunk){
    console.log(chunk.length);
    writable.write(chunk);
})

var readable2 = fs.createReadStream(__dirname+"/loremipsum.txt");
var writable2=fs.createWriteStream(__dirname+"/loremipsumcopy2.txt");
var compressed=fs.createWriteStream(__dirname+"/loremipsumcopy2.txt.gz");

var gzip= zlib.createGzip();
readable2.pipe(writable2);
readable2.pipe(gzip).pipe(compressed);

// pipe can only be used on a readable or duplex stream it cannot be used on writable
