import { Counter } from "./components/Counter";
import User from "./components/User";
import FatherTimer from "./components/FatherTimer";
import NetworkCounter from "./components/NetworkCounter";

function App() {
  return (
    <>
      <h1>React + TS</h1>
      <hr />
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <FatherTimer />
      <h2>useReducer</h2>
      <hr />
      <NetworkCounter />
    </>
  );
}

export default App;
