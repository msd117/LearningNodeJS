var http= require("http");
var fs =require("fs");

http.createServer(function(req,res){
   
    res.writeHead(200,{"contain-type":"text/html"});
    fs.createReadStream(__dirname+"/index.htm").pipe(res);

}).listen(1107,"127.0.0.1");