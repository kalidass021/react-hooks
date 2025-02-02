import './App.css';
import EffectHook from './components/EffectHook';
import MemoHook from './components/MemoHook';
import RefHook from './components/RefHook';
import CallbackHook from './components/CallbackHook';
import StateHook from './components/StateHook';
import StateHook2 from './components/StateHook2';

const App = () => {
  return (
    <>
      <div>Hello, from React!</div>
      {/* <StateHook />
      <StateHook2 /> */}
      {/* <EffectHook /> */}
      {/* <RefHook /> */}
      {/* <MemoHook /> */}
      <CallbackHook />
    </>
  );
};

export default App;
