import { createStore } from "redux";

const initialState = {
  theme: "day",
  displayMode: "default",
  sidebarContextual: false,
  wheelStyles: {
    "--dotBorderRadius": "50%",
    "--someOtherStyle": "cool",
    "--dotSize": "42px",
  },
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
    const nextState = sidebarContextual ? false : true;
    return {
      ...state,
      sidebarContextual: nextState,
    };
  },
  updateWheelStyles: (state, payload) => {
    const key = Object.keys(payload)[0];
    const value = Object.values(payload)[0];
    return {
      ...state,
      wheelStyles: { ...state.wheelStyles, [key]: value },
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
