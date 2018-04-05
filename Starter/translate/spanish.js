var greetings =require("./greetings.json");
var greet=function(name)
{
    console.log(greetings.es[name]);
}
module.exports=greet