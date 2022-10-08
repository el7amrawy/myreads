import "./App.css";
// import { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBooks from "./pages/SearchBooks";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
