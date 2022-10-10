import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Router from "./router/Routes";
import MainLayout from "../src/components/Layouts/index";

import { store } from "./store/configureStore";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);

root.render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Router />
          </MainLayout>
        </PersistGate>
      </Provider>
    </HashRouter>
  </StrictMode>
);
