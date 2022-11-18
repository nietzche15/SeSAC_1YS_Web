const url = require("url");
// console.log( url );
// console.log( url.parse );

// var obj = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=2&acq=%EC%9E%A5%EC%9D%B8&qdt=0&ie=utf8&query=%EC%9E%A5%EC%9D%B8%ED%95%9C%EA%B3%BC");
// console.log( obj );
// console.log( url.format(obj) );
// console.log( url.protocol );

// var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=2&acq=%EC%9E%A5%EC%9D%B8&qdt=0&ie=utf8&query=%EC%9E%A5%EC%9D%B8%ED%95%9C%EA%B3%BC");
// console.log( string.searchParams );
// console.log( string.searchParams.getAll('Where') );

var string = new url.URL("http://localhost?name=sesac&name=코딩온&age=10");
console.log( string.searchParams.getAll('name') );
console.log( string.searchParams.keys() );
string.searchParams.append('age','20');
console.log( string.searchParams.getAll('age') );
console.log( string.searchParams.has('age') );
