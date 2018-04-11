var http= require("http");
var fs = require("fs");


http.createServer(function(req,res){

    if(req.url==="/"){
        var html =fs.readFileSync(__dirname+"/index.htm","utf8");
        res.writeHead(200,{"contain-type":"text/html"});
        var message="asdasdasdsadas"
        html=html.replace('{message}',message);
        res.end(html);
    }else if(req.url==="/Sohel"){
        res.writeHead(200,{"contain-type":"application/json"});
        var object ={
            name:"john Doe",
            age:26
        }
        res.end(JSON.stringify(object));
    }else{
        res.writeHead(404);
        res.end();
    }
    

}).listen(1117,"127.0.0.1");