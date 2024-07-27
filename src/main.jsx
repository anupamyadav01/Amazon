import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./redux/Store/Store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />,
  </Provider>,
);
