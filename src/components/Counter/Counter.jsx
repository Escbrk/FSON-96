import React, { useState } from "react";

class Counter extends React.Component {
  handleIncrement = () => {
    console.log("Click +");
    console.log(this);
  };
  handleDecrement = () => {
    console.log("Click -");
    console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

// const Counter = () => {
//   <div className="Counter">
//     <span className="Counter__value">0</span>

//     <div className="Counter__controls">
//       <button type="button">Увеличить на 1</button>
//       <button type="button">Уменьшить на 1</button>
//     </div>
//   </div>;
// };

export default Counter;
