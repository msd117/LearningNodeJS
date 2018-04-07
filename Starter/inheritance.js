var Eventemitter=require("events");
var greetr=require("./inherit.js");
var util=require("util");
var Globalconstants =require("./constants")


util.inherits(greetr,Eventemitter);

greetr.prototype.greetings=function(data){
    console.log(this.greeting);
    this.emit(Globalconstants.events.INHERITANCEGREET,data);
}

var greetr1 =new greetr();
greetr1.on(Globalconstants.events.INHERITANCEGREET,function(data){
    console.log("Inheritance done By::" +data);
});

greetr1.greetings("sohel");