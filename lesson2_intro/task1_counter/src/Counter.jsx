import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <div className="counter__result"></div>
        <div className="counter__navigation">
          <button className="counter__btn">-1</button>
          <button className="counter__btn reset-btn">Reset</button>
          <button className="counter__btn">+1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
