import Book from "./Book";
import { useState } from "react";

const WantToRead = ({ books }) => {
  const [wantToRead, setWantToRead] = useState(() =>
    books.filter((book) => book.shelf === "wantToRead")
  );

  const bookElems = wantToRead.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookElems}</ol>
      </div>
    </div>
  );
};

export default WantToRead;
