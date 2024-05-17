import { act } from "react";
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: false };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "INCREASEDBY5":
      return { ...state, counter: state.counter + action.payload.value };
    case "HIDECOUNTER":
      return { ...state, showCounter: false };
    case "SHOWCOUNTER":
      return { ...state, showCounter: true };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
