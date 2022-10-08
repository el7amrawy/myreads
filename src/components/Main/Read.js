import { useState } from "react";
import Book from "./Book";

const Read = ({ books }) => {
  const [read, setRead] = useState(() =>
    books.filter((book) => book.shelf === "read")
  );

  const bookElems = read.map((book) => <Book key={book.id} book={book} />);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookElems}</ol>
      </div>
    </div>
  );
};
export default Read;
