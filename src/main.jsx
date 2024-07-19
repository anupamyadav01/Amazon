import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
// import App from "./CounterApp/App";
// import { configureStore } from "@reduxjs/toolkit";
// import accountReducer from "./CounterApp/slices/accountSlice.js";
// import bonusReducer from "./CounterApp/slices/bonusSlice";
import { Provider } from "react-redux";
import store from "./redux/Store/Store";
// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     bonus: bonusReducer,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />,
  </Provider>,
);
