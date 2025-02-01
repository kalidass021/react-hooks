import { useEffect, useState } from 'react';
/* 
    * The useEffect hook allow us to perform side effects in our components.

    Some examples of side effects are
        
        * Fetching data from API
        * Directly updating the DOM
        * Timers like SetTimeout and SetInterval
*/

const EffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 2000);
    })
  return (
    <>
      <h1>I have rendered {count} times</h1>
    </>
  );
};

export default EffectHook;
