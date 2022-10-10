import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, books }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
          <BookShelfChanger book={book} books={books} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map((auth) => (
            <div key={auth}>{auth}</div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Book;
