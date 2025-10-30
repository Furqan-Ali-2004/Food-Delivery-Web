import React from "react";
import Home from "./pages/Home.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
