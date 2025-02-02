import { useState, useMemo } from "react";
/* 
    * The useMemo hook returns a memoized value.
    * It's like caching a value so that it doesn't need to recalculated.
    * The useMemo hook only runs when one of its depentencies gets updated.
    * This can help us to improve the performance of the application
*/


/* 
    * The useMemo hook and the useCallback hook are similar.
    * The main difference is,
        * useMemo returns the memoized value.
        * useCallback returns the memoized function.
*/

const MemoHook = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // const cubeNum = (num) => {
    //     console.log('calculation done');
    //     return Math.pow(num, 3);
    // }

    // const result = useMemo(() => cubeNum(number), [number]);

    const result = useMemo(() => {
        console.log('calculation done');
        return Math.pow(number, 3);
    }, [number]);

  return (
    <>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <h1>Cube of the number: {result}</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(prev => prev + 1)}>Counter ++</button>
    </>
  );
};

export default MemoHook;
