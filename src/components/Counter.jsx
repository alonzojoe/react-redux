import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementBy5 = () => {
    dispatch(counterActions.increase({ value: 5 }));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
