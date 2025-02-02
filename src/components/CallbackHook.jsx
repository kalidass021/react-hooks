import { useState, useCallback } from 'react';
import Header from './Header';

/*
 * useCallback is a react hook, that lets us cache the function definition between re-renders.
 * It means, when we use the useCallback hook, it doesn't create multiple instance of same function when re-render happens.
 * Instead of creating new instance of the function, it provides the cached function on re-render of the component.
 */

const CallbackHook = () => {
  const [count, setCount] = useState(0);

  const demoFn = useCallback(() => {

  }, []);
  return (
    <div>
      <Header demoFn={demoFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default CallbackHook;
