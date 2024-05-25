import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { interceptor } from "./services";
import store from "./store";

import Main from "./components/layout/Main";
import './App.css'

interceptor(store);

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/*" element={<Main />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App
