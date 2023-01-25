import { createStore } from "redux";

const initialState = {
  theme: "day",
  displayMode: "default",
  sidebarContextual: true,
};

const handlers = {
  toggleTheme: (state) => {
    const { theme } = state;
    const nextTheme = theme === "day" ? "night" : "day";
    return {
      ...state,
      theme: nextTheme,
    };
  },
  updateSidebarMode: (state) => {
    const { sidebarContextual } = state;
    const nextState = sidebarContextual ? true : false;
    return {
      ...state,
      sidebarContextual: nextState,
    };
  },
};

const reducer = (state, { type, payload }) => {
  if (handlers[type]) {
    return handlers[type](state, payload);
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
