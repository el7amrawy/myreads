import CurrentlyReading from "../components/Main/CurrentlyReading";
import WantToRead from "../components/Main/WantToRead";
import Read from "../components/Main/Read";

const Main = () => {
  return (
    <main>
      <div className="list-books-content">
        <CurrentlyReading />
        <WantToRead />
        <Read />
      </div>
    </main>
  );
};

export default Main;
