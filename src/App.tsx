import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";
import { CounterHook } from "./components/CounterHook";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  );
}

export default App;
