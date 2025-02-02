
/* 
    * useLayoutEffect works similar to useEffect, but is called before the user interface gets mounted.
    * means,
    * useEffect gets called after printing the DOM elements.
    * useLayoutEffect gets called before printing the DOM elements.
*/

import { useEffect, useLayoutEffect } from "react"

const LayoutEffectHook = () => {
    useEffect(() => {
        console.log('message from useEffect');
    }, []);

    useLayoutEffect(() => {
        console.log('message from use layout effect');
    }, []);
  return (
    <div>LayoutEffectHook</div>
  )
}

export default LayoutEffectHook