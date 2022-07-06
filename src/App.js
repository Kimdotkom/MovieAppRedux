import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/Navb/Navb";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import { useState } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState(""); 

  return (
    <div className="App">
      <Navb setInputSearch={setInputSearch}/>
      <AddMovie />
      <MovieList inputSearch={inputSearch}/>
    </div>
  );
}

export default App;
