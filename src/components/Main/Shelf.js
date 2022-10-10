import { useState } from "react";
import Book from "./Book";

const Shelf = ({ name, filter, books }) => {
  // console.log(books.books);
  // const [shelfBooks, ,] = useState(
  //   books.books.filter((book) => book.shelf === filter)
  // );

  // const bookElems = shelfBooks.map((book) => (
  //   <Book key={book.id} book={book} books={books} />
  // ));
  //   console.log(name, books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.books
            .filter((book) => book.shelf === filter)
            .map((book) => (
              <Book key={book.id} book={book} books={books} />
            ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
