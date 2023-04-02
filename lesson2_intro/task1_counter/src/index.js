import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { INCREMENT, DECREMENT, RESET } from './variables';

const incrementActionCreator = () => {
  return { type: INCREMENT };
};

const decrementActionCreator = () => {
  return { type: DECREMENT };
};
const resetActionCreator = () => {
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

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);
