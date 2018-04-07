var http =require("http");
var fs =require("fs");

http.createServer(function(req,res){
    var html =fs.readFileSync(__dirname+"/index.htm","utf8");
    res.writeHead(200,{"contain-type":"text/html"});
    var message="Hello World !!!!"
    html=html.replace('{message}',message);
    
    
    res.end(html);


}).listen(1117,"127.0.0.1");