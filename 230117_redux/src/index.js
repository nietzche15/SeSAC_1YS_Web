import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import { configureStore } from '@reduxjs/toolkit';

// let weight = 100;

// // reducer
// function reducer(state = weight, action) {
//   return action.type === 'gain'
//     ? (state += 1)
//     : action.type === 'lose'
//     ? (state -= 1)
//     : state;
// }

// let store = createStore(reducer);
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({ reducer: rootReducer }, reduxDevTools);
// console.log(store.getState());

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
