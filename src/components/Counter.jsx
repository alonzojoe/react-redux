import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const incrementBy5 = () => {
    dispatch({ type: "INCREASEDBY5", payload: { value: 5 } });
  };

  const toggleCounterHandler = () => {
    const actionType = !showCounter ? "SHOWCOUNTER" : "HIDECOUNTER";
    dispatch({ type: actionType });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0",
          gap: "5px",
        }}
      >
        <button onClick={incrementHandler}>Increment +</button>
        <button onClick={decrementHandler}>Decremeent -</button>
        <button onClick={incrementBy5}>Inc by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
