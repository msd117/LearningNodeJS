var fs =require("fs");
var greet = fs.readFileSync(`${__dirname}/helloworld.txt`,"utf8");
console.log(greet);

// readfilesynch is synchronus call and will block the code from running next code until its done reading it

var greet2 =fs.readFile(`${__dirname}/helloworld.txt`,"utf8",function(err,data){
   
    if(err===null)
    console.log(data);
    
})
// readFile is asynchronus call and will not block the code from running next code until its done reading it
//  and will the callback after the node is don running other code

console.log("Done");