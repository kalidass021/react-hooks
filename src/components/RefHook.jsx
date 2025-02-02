import { useState, useEffect, useRef } from 'react';

/*
 * useRef is a react hook that allow us to create mutable variables,
 * Which wil not re-render the component.
 * useRef is also used for accessing the DOM elements.
 */

const RefHook = () => {
  const [value, setValue] = useState(0);
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  // access the dom element using useRef
  const inputElem = useRef();

  //   useEffect(() => {
  //     setCount(prev => prev + 1);
  //   }); // this will run end less

  useEffect(() => {
    count.current += 1;
  })

  const handleClick = () => {
    console.log('input', inputElem.current)
    inputElem.current.style.backgroundColor = 'red';
  }
  return (
    <div>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h2>Render Count: {count.current}</h2>

      <div>
        {/* accessing the dom using useRef */}
        <input type="text" ref={inputElem} />
        <button onClick={handleClick} >Click</button>
      </div>
    </div>
  );
};

export default RefHook;
