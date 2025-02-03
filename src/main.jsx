import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from 'react-redux';
import store from './redux/store';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Remove <StrictMode> after development */}
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  </Provider>
);