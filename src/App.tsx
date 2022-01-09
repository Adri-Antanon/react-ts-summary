import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
    </>
  );
}

export default App;
