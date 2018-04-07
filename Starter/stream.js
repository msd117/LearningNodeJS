var fs =require("fs");

var readable= fs.createReadStream(__dirname+"/loremipsum.txt",{encoding:"utf8",highWaterMark:16 *1024});
var writable=fs.createWriteStream(__dirname+"/loremipsumcopy.txt")
readable.on("data",function(chunk){
    console.log(chunk.length);
    writable.write(chunk);
})

// encoding defines the type of encoding while reading and highWaterMark is the size of chunks 