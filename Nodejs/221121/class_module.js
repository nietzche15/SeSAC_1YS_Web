function Class1(){
    this.name = 'Hello World !';
    this.message;
}

Class1.prototype.setMessage = function(msg){
    this.message = msg;
}
Class1.prototype.getMessage =function(){
    return this.message;
}

module.exports = Class1; 