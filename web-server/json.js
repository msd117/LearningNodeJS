var http =require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"contain-type":"application/json"});
    var object ={
        name:"john Doe",
        age:26
    }
    res.end(JSON.stringify(object));
}).listen(1117,"127.0.0.1");