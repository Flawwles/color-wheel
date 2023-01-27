import { createStore } from "redux";

const initialState = {
  theme: "day",
  displayMode: "default",
  sidebarContextual: false,
  selectedColor: "none",
  wheelStyles: {
    "--dotBorderRadius": "50%",
    "--someOtherStyle": "cool",
    "--dotSize": "42px",
    wheelStep: 150,
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
  updateSidebar: (state) => {
    // const { sidebarContextual } = state;
    // const nextState = sidebarContextual ? false : true;
    return {
      ...state,
      sidebarContextual: true,
    };
  },
  closeSidebar: (state) => {
    return {
      ...state,
      sidebarContextual: false,
    };
  },
  updateWheelStyles: (state, payload) => {
    return {
      ...state,
      wheelStyles: { ...state.wheelStyles, ...payload },
    };
  },
  setSelectedColor: (state, payload) => {
    return {
      ...state,
      ...payload,
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
