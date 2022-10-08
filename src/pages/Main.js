import CurrentlyReading from "../components/Main/CurrentlyReading";
import WantToRead from "../components/Main/WantToRead";
import Read from "../components/Main/Read";

const Main = () => {
  return (
    <main>
      <div className="list-books-content">
        <div>
          <CurrentlyReading />
          <WantToRead />
          <Read />
        </div>
      </div>
    </main>
  );
};

export default Main;
