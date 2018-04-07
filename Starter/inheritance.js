var Eventemitter=require("events");
// var greeter=require("./inherit.js");
var util=require("util");
var Globalconstants =require("./constants")

function greeter(){
    Eventemitter.call(this);
    this.greeting="sohel is trying to do inheritance using util and eventlister js files"
}


util.inherits(greeter,Eventemitter);

greeter.prototype.greetings=function(data){
    console.log(this.greeting);
    this.emit(Globalconstants.events.INHERITANCEGREET,data);
}

var greetr1 =new greeter();
greetr1.on(Globalconstants.events.INHERITANCEGREET,function(data){
    console.log("Inheritance done By ::" +data);
});

greetr1.greetings("sohel");


//  You can Do the same above stuff using the new ES6 keyword class
// use strict is used to remove uncecesaay error the javascript used to ignore ...
//  such as if declare variable like a=6 without the keyword var, 
// javascript would just make the variable global but by using "use strict" it will give the error

'use strict';

class greeter2 extends Eventemitter{
    constructor(){
        super();
        this.greeting="sohel is trying to do inheritance using Using ES6 Class Keyword"
    }

    greetings(data){
        console.log(this.greeting);
        this.emit(Globalconstants.events.INHERITANCEGREET,data);
    }
}


var greetr2 =new greeter2()
greetr2.on(Globalconstants.events.INHERITANCEGREET,function(data){
    console.log(`Inheritance done By :: ${data}`);
});
greetr2.greetings("Sohel with class")

// You can also export classes from modeules see classmodule.js 

var greeter3 =require("./classmodule")

var greetr3 =new greeter3()
greetr3.on(Globalconstants.events.INHERITANCEGREET,function(data){
    console.log(`Inheritance done By :: ${data}`);
});
greetr3.greetings("Sohel with class From Modules")