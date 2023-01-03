// react 따라하기
// import React from 'react';
// import ReactDOM from 'react-dom';
// 함수형 component

function HelloWorldButton(){
    const [ isClick, setClickState ] = React.useState(false);
    const text = isClick ? "It's clicked" : "Hello, React world";

    return (
        <button onClick={() => setClickState(!isClick)}>
            <div>
                <span></span>
            </div>
        </button>
    );
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render( e(HelloWorldButton) );