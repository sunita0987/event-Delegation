import React from "react";
import  { useState } from "react";
import "./App.css";
import Event from "./components/Event.jsx";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Event/>
    </>
  )
}
export default App
