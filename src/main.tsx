import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        theme="colored"
        className="!bg-transparent !shadow-none !p-0 z-50"
        toastClassName="!bg-transparent !shadow-none !p-0"
        closeButton={false}
      />
    </BrowserRouter>
  </React.StrictMode>
);
