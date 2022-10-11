import { useEffect, useState } from "react";
import { getAll, update } from "../../BooksAPI";

const BookShelfChanger = ({ book, books }) => {
  const [shelf, setShelf] = useState("");

  useEffect(() => {
    if (shelf.length) {
      // console.log(shelf);
      (async () => {
        const res = await update(book, shelf);
        console.log(res);
        const newBooks = await getAll();
        books.setBooks(newBooks);
        localStorage.setItem("books", JSON.stringify(newBooks));
      })();
    }
  }, [shelf]);

  return (
    <div className="book-shelf-changer">
      <select
        value={shelf}
        onChange={(ev) => {
          setShelf(ev.target.value);
        }}
      >
        <option disabled>Move to...</option>
        <option value="none">None</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
