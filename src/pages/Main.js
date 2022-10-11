import Shelf from "../components/Main/Shelf";
import { Link } from "react-router-dom";

const Main = ({ books }) => {
  return (
    <main>
      <div className="list-books-content">
        <Shelf
          books={books}
          name="Currently Reading"
          filter="currentlyReading"
        />
        <Shelf books={books} name="Want to Read" filter="wantToRead" />
        <Shelf books={books} name="Read" filter="read" />

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
