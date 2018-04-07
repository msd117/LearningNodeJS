function greet(callback){
    console.log("Greetings !!!")
    var name={
        name:"John",
        Age:"23"
    }
    
    callback && callback(name);
}

greet(function(data){
    console.log(`Callback invoked by ${ data.name }`)
});

greet(function(data){
    console.log(`Callback invoked by ${data.name} of age ${data.Age}`);
});
greet();