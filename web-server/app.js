var http =require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"contain-type":"text/plain"});
    res.end("Hello World\n");

}).listen(1117,"127.0.0.1");