var Eventemitter=require("events");
function greeter(){
    Eventemitter.call(this);
    this.greeting="sohel is trying to do inheritance using util and eventlister js files"
}
module.exports=greeter;