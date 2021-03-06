import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import App from "./Components/App";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
