class Car {
    constructor(color) {
        this.color = color;
        this.isDoor = true;
    }
    move(){
        console.log("움직인다");
    }
    stop(){
        console.log("멈춘다"); 
    }
    returnColor(){
        return this.color;
    }
    returnIsDoor(){
        return this.isDoor;
    }
}
module.exports = { Car };