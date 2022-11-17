// array 구조 분해
let list = ['apple','banana'];
[item1, item2] = list;
//let item1 = list[0];
//let item2 = list[1];
//를 한번에 처리

console.log( item1 );
console.log( item2 );

[item1, item2='peach', item3='melon' ] = list;
// 값 input 없는 경우 기본값 할당
console.log( item1 );
console.log( item2 ); //input 값 할당
console.log( item3 ); // 기본값 할당

let x = 1;
let y = 3; 
//서로 값 바꾸기 
// 일반적으로 let temp = x; x = y; y = temp;
[ x, y ] = [ y, x ];

//object 구조분해

let obj ={
    a : 'one',
    b : 'two',
    e : 'five',
    f : 'six'
};
//let a = obj.a;
let { b : key1, a, c = "three"} = obj;
// b 의 변수명 key1으로 변경

console.log( a );
console.log( key1 );
console.log( c );

let { b, ...rest } = obj;
console.log( b );
console.log( rest );


