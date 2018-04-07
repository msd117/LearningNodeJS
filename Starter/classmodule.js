'use strict';
var Eventemitter=require("events");
var Globalconstants =require("./constants")

class greeter2 extends Eventemitter{
    constructor(){
        super();
        this.greeting="sohel is trying to do inheritance using Using ES6 Class Keyword from modules"
    }

    greetings(data){
        console.log(this.greeting);
        this.emit(Globalconstants.events.INHERITANCEGREET,data);
    }
}

module.exports=greeter2;