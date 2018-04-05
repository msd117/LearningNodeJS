function Human(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
Human.prototype.greet=function(){
    console.log(this.firstName +" "+ this.lastName +", Welcomes you to the shitty world of NodeJS")
}
module.exports =Human;