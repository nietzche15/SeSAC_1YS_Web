class Fruits {
    constructor() {
        this.Isfruit = true;
        this.IsBitter = false; 
        this.Color = 'yellow';
    }
    color(color) {
        console.log( this.Color );
        console.log( this.color );
    }
    sweet() {
        return this.IsBitter;
    }
}
class Jam {
    constructor(sort){
        this.sort = sort;
        this.IsSticky = true;
    }
    returnSort(){
        return this.sort;
    }
    IsJar(){
        console.log("병에 들어있다");
    }
}
class Nothin {
    constructor(){
        this.a = 8;
        this.b = 'name';
    }
    done(){
        return this.a+ this.b;
    }
}
const Arr1 = { Fruits, Jam, Nothin };
console.log( Arr1 );

module.exports = Arr1;