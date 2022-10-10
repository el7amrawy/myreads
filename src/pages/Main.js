import Shelf from "../components/Main/Shelf";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import { useEffect, useState } from "react";

const Main = () => {
  const [books, setBooks] = useState(
    () => JSON.parse(localStorage.getItem("books")) || []
  );
  useEffect(() => {
    getAll().then((d) => {
      localStorage.setItem("books", JSON.stringify(d));
      setBooks(d);
    });
  }, []);

  // console.log(books);
  return (
    <main>
      <div className="list-books-content">
        <Shelf
          books={{ books, setBooks }}
          name="Currently Reading"
          filter="currentlyReading"
        />
        <Shelf
          books={{ books, setBooks }}
          name="Want to Read"
          filter="wantToRead"
        />
        <Shelf books={{ books, setBooks }} name="Read" filter="read" />

        <div className="open-search">
          <Link to="/search">
            <span>Add a book</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
