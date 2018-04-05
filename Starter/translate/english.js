var greetings =require("./greetings.json");
var greet=function(name)
{
    console.log(greetings.en[name])
}
module.exports=greet