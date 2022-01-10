import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;
