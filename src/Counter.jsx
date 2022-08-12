import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <>
      <div className="counter">
        <button className="btn" onClick={() => setCount(count + 1)}>Increment by 1</button>
        <br />
        <button className='btn' onClick={() => setCount(count - 1)}>Decrement by 1</button>
        <br />
        <div className="by">
          <button onClick={() => setCount(count + input)}>
            Add by {input}
          </button>
          <input onChange={(e) => setInput(+e.target.value)} />
        </div>
      </div>

      <h1>Count: {count}</h1>
    </>
  );
};

export default Counter;
