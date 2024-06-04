import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fonts/fonts.css"; // 모든 컴포넌트에 폰트 파일을 적용

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
