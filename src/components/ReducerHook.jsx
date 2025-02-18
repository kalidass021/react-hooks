/* 
    * useReducer is similar to useState, But instead of providing state & setter function,
    * it provides state and dispatch function.
    * 
    * 
    * The useReducer hook accepts two arguments,
        * Reducer function
        * Initial State
        * 
        * 
        * and returns: current state and dispatch method
        * 

    * the reducer function specifies how, the state gets updated
*/
import { useReducer } from 'react';

const ReducerHook = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    if (action.type === 'increase') {
      return { count: state.count + 1 };
    }

    if (action.type === 'decrease') {
      return { count: state.count - 1 };
    }

    if (action.type === 'input') {
      return { count: action.payload };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>ReducerHook</div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
      <br />
      <input
        value={state.count}
        onChange={(e) =>
          dispatch({ type: 'input', payload: Number(e.target.value) })
        }
        type='number'
      />
    </>
  );
};

export default ReducerHook;
