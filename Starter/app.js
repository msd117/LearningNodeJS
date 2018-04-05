
var Human = require("./greet");
var greetings= require("./translate")
// var emitter=require("./emitter.js");//replace with the nodeJS event emitter classes
var emitter=require("events");
var Globalconstants =require("./constants")
// Inheritance using inherits keyword
var greetr=require("./inherit.js");
var Eventemitter=require("events");
var util=require("util");

require("./prototype");

var nadeem=new Human("Nadeem","Mohammed");
nadeem.greet()
var Naim= new Human("Naim","Shaikh");
var sohel= new Human("Sohel ","Deshmukh");

Naim.greet();
nadeem.thanks();
Naim.thanks();
sohel.thanks();
console.log(sohel.__proto__);

var a=3;
console.log("Before Calling change function on primitive value a:" +a)
var changea = function(b){
    b=5;

}
changea(a);
console.log("After Calling change function on primitive value a:" +a)
var c={
    a:3,

}
var changeobja= function(b){
    b.a=5;
}
console.log("Before Calling change function on Object value of Object.a:" +c.a)
changeobja(c);


console.log("After Calling change function on Object value of Object.a:" +c.a)

greetings.english("sohel");
greetings.spanish("ramiz");



var emt =new emitter();
emt.on(Globalconstants.events.GREET,function(){
    console.log("Sohel said Hi !!!");
});
emt.on(Globalconstants.events.GREET,function(){
    console.log("He also said please check above logs");
});
console.log("Hi");
emt.emit(Globalconstants.events.GREET);

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
