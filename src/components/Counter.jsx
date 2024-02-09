import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incresecount = () => {
    setCount(count + 1);
  };
  const decresecount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <div className="buttons">
        <button onClick={incresecount}>+</button>
        <button onClick={decresecount}>-</button>
      </div>
    </div>
  );
};

export default Counter;
