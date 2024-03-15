import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import App from "./App";
import { Toaster } from "./components/ui/sonner";
import { configureWeb3Modal } from "./connections";

configureWeb3Modal();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);
