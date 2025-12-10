import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const [toSet, setToSet] =  useState(0)

  return (
    <div style={{}}>
      <h1>Counter App</h1>
      <div className="card">count is {count}</div>

      <div style={{ gap: "20px", display: "flex" }}>
        <button onClick={handleIncrease}>Increase</button>
        <button
          onClick={() => {
            setCount((prev) => Math.max(prev - 1, 0));
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setCount((count) => 0);
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ gap: "20px", display: "flex", margin: "20px" }}>
        <input
          type="text"
          style={{ border: "1px solid white", padding: "0.6em 1.2em" }}
          value={toSet}
          onChange={(e) =>setToSet(Number(e.target.value))}
        />
        <button onClick={() => {
          setCount(Number(toSet))
          setToSet(0)
        }}>Set to {toSet}</button>
      </div>
    </div>
  );
}

export default App;
