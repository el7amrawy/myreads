import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBooks from "./pages/SearchBooks";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAll } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState(
    () => JSON.parse(localStorage.getItem("books")) || []
  );
  useEffect(() => {
    getAll().then((d) => {
      localStorage.setItem("books", JSON.stringify(d));
      setBooks(d);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main books={{ books, setBooks }} />} />
        <Route
          path="/search"
          element={<SearchBooks books={{ books, setBooks }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
