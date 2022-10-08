import CurrentlyReading from "../components/Main/CurrentlyReading";
import WantToRead from "../components/Main/WantToRead";
import Read from "../components/Main/Read";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import { useEffect, useState } from "react";

const Main = () => {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  useEffect(() => {
    getAll().then((d) => {
      localStorage.setItem("books", JSON.stringify(d));
      setBooks(d);
    });
  }, []);

  console.log(books);
  return (
    <main>
      <div className="list-books-content">
        <CurrentlyReading books={books} />
        <WantToRead books={books} />
        <Read books={books} />
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
