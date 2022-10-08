import { useState } from "react";
import Book from "./Book";

const CurrentlyReading = ({ books }) => {
  const [currentlyReading, setCurrentlyReading] = useState(() =>
    books.filter((book) => book.shelf === "currentlyReading")
  );

  const bookElems = currentlyReading.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookElems}</ol>
      </div>
    </div>
  );
};
export default CurrentlyReading;
