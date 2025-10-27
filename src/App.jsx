import React from "react";
import Home from "./pages/home.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Home />
      <ToastContainer
        theme="dark"
        toastStyle={{ backgroundColor: "#1e1e1e", color: "white" }}
      />
    </div>
  );
}

export default App;
