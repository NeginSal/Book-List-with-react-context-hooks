import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";


const App = () => {
  return (
    <div>
      <BookContextProvider>
        <Navbar/>
      </BookContextProvider>

    </div>
  );
};

export default App;