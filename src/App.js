import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBooks from "./pages/SearchBooks";
import Main from "./pages/Main";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks />
      ) : (
        <div className="list-books">
          <NavBar />
          <Main />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
