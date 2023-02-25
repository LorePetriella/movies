import ReactDOM from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./assets/scss/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
