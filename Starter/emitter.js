// this js file is used to demonstrate how events are faked in NodeJS


function emitter(){
    this.events={};
}

emitter.prototype.on=function(type,listener){
    this.events[type]=this.events[type] || [];
    this.events[type].push(listener);

}
emitter.prototype.emit=function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }

}
module.exports=emitter;