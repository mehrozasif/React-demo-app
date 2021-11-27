/* store.js */
import { createStore } from "redux";

const initialState = {
  login: false,
  user: localStorage.getItem("login") ? localStorage.getItem("login") : "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH":
      localStorage.setItem("login", action.payload.email);
      return {
        ...state,
        login: true,
        user: action.payload.email,
      };
    case "LOG_OUT":
      localStorage.removeItem("login");
      return {
        ...state,
        login: false,
        user: null,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
