import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "../components/Main/Book";

const SearchBooks = ({ books }) => {
  const [searchString, setSearchString] = useState("");
  const [search_results, setSearch_results] = useState([]);

  useEffect(() => {
    if (searchString.length)
      search(searchString, 5).then((res) => setSearch_results(res));
  }, [searchString]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchString}
            onChange={(ev) => setSearchString(ev.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {search_results.map((book) => (
            <Book key={book.id} book={book} books={books} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
