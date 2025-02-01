import { useState } from 'react';

const StateHook = () => {
  const [counter, setCounter] = useState(0);
  // useState is a react hook, which cretes an "state variable" .
  // Which helps us to track state in components & updates the user interface when state changes

  const handleIncrement = () => {
    setCounter(counter => counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter => counter - 1);
  }
  return (
    <>
      <button onClick={handleDecrement}>Decrease</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increase</button>
    </>
  );
};

export default StateHook;
