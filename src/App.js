import "./App.css";
import apiKey from "./config.js";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import SearchBox from "./Components/Searchbox/SearchBox.component";
import { SearchContext } from "./Contexts/SearchContext/SearchContext";
import Home from "./Pages/Home.component";
import ReactDOM from "react-dom";
import Search from "./Pages/Search";



function App() {

const [searchField, setSearchField] = useState(null);
  

  return (
    <div className="App">
      <Router>
        <SearchContext.Provider value={{ searchField, setSearchField }}>
          <SearchBox search={searchField} />
          <Routes>
            <Route path="/" element={<Home search={searchField} />}></Route>
            <Route
              exact
              path="/search"
              element={<Search searchVal={searchField} />}
            ></Route>
          </Routes>
         
        </SearchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
