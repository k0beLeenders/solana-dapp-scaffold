import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";
import { store } from "state/store";
import { ContextProvider } from "contexts";

import { AppComp } from "./App";
import { ToastContainerComp } from "components/global";

import "./index.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import "react-toastify/dist/ReactToastify.css";

import "antd/dist/antd.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <ToastContainerComp />
        <AppComp />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
