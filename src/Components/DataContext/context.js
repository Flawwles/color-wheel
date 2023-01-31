import { createStore } from "redux";

const initialState = {
  sidebarContextual: false,
  selectedColor: {
    name: "theme-shade-1",
    value: "hsla(0, 0%, 100%, 1)",
    type: "hsla",
    values: { h: 0, s: 0, l: 100, a: 1 },
    cssVar: "theme-shade-1",
  },
  wheelStyles: {
    "--dotBorderRadius": "50%",
    "--dotSize": "38px",
    wheelStep: 120,
    dotOutline: false,
    "--dotOutlineStyle": "none",
  },
};

const handlers = {
  updateSidebar: (state) => {
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
