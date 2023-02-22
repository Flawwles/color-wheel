import { createStore } from "redux";

const initialState = {
  theme: "day",
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
    "--dotSize": "48px",
    wheelStep: 150,
    dotOutline: false,
    "--dotOutlineStyle": "none",
    coreColors: false,
  },
  tooltipDisplays: "name",
  searchForColor: "",
  masterColorList: [],
  matchThreshold: 5,
};

const handlers = {
  updateSidebar: (state, e) => {
    const activeItem = document.querySelectorAll(
      ".color-wheel--dot--active"
    )[0];

    activeItem ? (activeItem.className = "color-wheel--dot") : null;

    e.target.classList.add("color-wheel--dot--active");
    return {
      ...state,
      sidebarContextual: true,
    };
  },
  closeSidebar: (state) => {
    const activeItem = document.querySelectorAll(
      ".color-wheel--dot--active"
    )[0];
    activeItem ? (activeItem.className = "color-wheel--dot") : null;
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
  setSearchForColor: (state, payload) => {
    return {
      ...state,
      searchForColor: payload,
    };
  },
  setMatchThreshold: (state, payload) => {
    return {
      ...state,
      matchThreshold: payload,
    };
  },
  updateMasterColorList: (state, payload) => {
    const { masterColorList } = state;
    const newList = masterColorList.concat(payload);
    return {
      ...state,
      masterColorList: newList,
    };
  },
  toggleTheme: (state) => {
    const { theme } = state;
    const nextTheme = theme === "day" ? "night" : "day";
    return {
      ...state,
      theme: nextTheme,
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
