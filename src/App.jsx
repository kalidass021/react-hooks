import './App.css';
import EffectHook from './components/EffectHook';
import MemoHook from './components/MemoHook';
import RefHook from './components/RefHook';
import CallbackHook from './components/CallbackHook';
import StateHook from './components/StateHook';
import StateHook2 from './components/StateHook2';
import Profile from './components/Profile';
import Footer from './components/Footer';
import LayoutEffectHook from './components/LayoutEffectHook';
import ReducerHook from './components/ReducerHook';

const App = () => {
  return (
    <>
      <div>Hello, from React!</div>
      {/* <StateHook />
      <StateHook2 /> */}
      {/* <EffectHook /> */}
      {/* <RefHook /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      {/* <Profile />
      <Footer /> */}
      <ReducerHook />
      {/* <LayoutEffectHook /> */}
    </>
  );
};

export default App;
