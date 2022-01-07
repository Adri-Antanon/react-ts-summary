import { Counter } from "./components/Counter";
import User from "./components/User";
import FatherTimer from "./components/FatherTimer";

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
    </>
  );
}

export default App;
