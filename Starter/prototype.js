var Human=require('./greet');

Human.prototype.thanks=function(){
    console.log(this.firstName +" "+ this.lastName +", Thanks for Using NodeJS");
}