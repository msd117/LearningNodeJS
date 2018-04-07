
var Human = require("./greet");
var greetings= require("./translate")
// var emitter=require("./emitter.js");//replace with the nodeJS event emitter classes
var emitter=require("events");
var Globalconstants =require("./constants")
// Inheritance using inherits keyword



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

// example for pass by value and pass by reference ...Primitive data type are passed by value and objects are pass by reference

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



// Concept of events explained by using a events.js file 
// If you want to ceheck how event are executed in the most basic manner then just Uncomment this line on top var emitter=require("./emitter.js"); and comment the other one and debug it with breakpoints

var emt =new emitter();
emt.on(Globalconstants.events.GREET,function(){
    console.log("Sohel said Hi !!!");
});
emt.on(Globalconstants.events.GREET,function(){
    console.log("He also said please check above logs");
});
console.log("Hi");
emt.emit(Globalconstants.events.GREET);





// template Literals

var obj={
    name : "Mohd Sohel",
    greet : function(qualification,age){
        console.log(`Hi,I am ${ this.name}(${qualification}) and my age is ${age} `);
    }
}
obj.greet("B.E","28");
obj.greet.call({name:"shaikh Naim"},"M.Sc","28");
obj.greet.apply({name:"Mohammed Nadeem"},["M.C.A","26"]);
