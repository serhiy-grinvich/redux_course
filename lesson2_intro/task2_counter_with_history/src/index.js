import './index.scss';

import { increment, decrement, reset, store } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtnElem = document.querySelector('[data-action="increment"]');
const decrementBtnElem = document.querySelector('[data-action="decrement"]');
const resetBtnElem = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};

incrementBtnElem.addEventListener('click', onIncrement);
decrementBtnElem.addEventListener('click', onDecrement);
resetBtnElem.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => (acc += value), 0);
  const historyString = state.history.reduce((acc, value) => {
    return (acc += value > 0 ? '+1' : '-1');
  }, '');
  resultElem.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
