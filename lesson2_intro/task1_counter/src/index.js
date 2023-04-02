// import React from 'react';
import { createStore } from 'redux';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App.jsx';
// import { INCREMENT, DECREMENT, RESET } from './variables';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const increment = () => {
  return { type: 'COUNTER/INCREMENT' };
};

export const decrement = () => {
  return { type: 'COUNTER/DECREMENT' };
};
// const reset = () => {
//   return { type: 'COUNTER/RESET' };
// };
// const initialState = {
//   history: [],
// };

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);
