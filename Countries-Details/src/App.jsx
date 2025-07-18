import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
    <Header />
    <Outlet />
    </ThemeProvider>
  )
}

export default App;
