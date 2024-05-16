import Counter from "./components/Counter";
import { useSelector } from "react-redux";
const ComponentA = () => {
  const counter = useSelector((state) => state.counter);
  return <div style={{ color: "#fff" }}>{counter}</div>;
};

function App() {
  return (
    <>
      <Counter />
      <ComponentA />
    </>
  );
}

export default App;
