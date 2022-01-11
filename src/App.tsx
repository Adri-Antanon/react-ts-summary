import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";
import { CounterHook } from "./components/CounterHook";
import { CounterReducer } from "./components/CounterReducer";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  );
}

export default App;
