import React from "react";
import reactDom from "react-dom";

// css files
import "./index.css";

// apps
import App from "./App";

const Main = () => {
  return (
    <main>
      <h1 style={{ textAlign: "center", letterSpacing: "2px" }}>
        BIRTHDAY REMAINDER
      </h1>
      <App />
    </main>
  );
};

reactDom.render(<Main />, document.getElementById("root"));
