const url = require("url");
var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
console.log( "keys : ", string.searchParams.keys() );
console.log( "values : ", string.searchParams.values() );

string.searchParams.delete('sm');
console.log( "keys w/o 'sm' : ", string.searchParams.keys() );
