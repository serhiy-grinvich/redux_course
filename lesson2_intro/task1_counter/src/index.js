// import React from 'react';
import { createStore } from 'redux';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App.jsx';
// import { INCREMENT, DECREMENT, RESET } from './variables';

export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

const increment = () => {
  return { type: INCREMENT };
};

const decrement = () => {
  return { type: DECREMENT };
};
const reset = () => {
  return { type: RESET };
};
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

const store = createStore(counterReducer);

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);
