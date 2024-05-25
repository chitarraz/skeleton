import React from "react";
import { Provider } from "react-redux";

import Main from "./components/layout/Main.jsx";

import { interceptor } from "./services";
import store from "./store";
import './App.css'

interceptor(store);

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.Fragment>
  );
}

export default App
