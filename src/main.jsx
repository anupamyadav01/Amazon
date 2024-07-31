import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/Store/Store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />,
    </PersistGate>
  </Provider>,
);
