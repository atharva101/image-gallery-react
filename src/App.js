import "./App.css";
import apiKey from "./config.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route,withRouter } from "react-router-dom";
import SearchBox from "./Components/Searchbox/SearchBox.component";
import { SearchContext } from "./Contexts/SearchContext/SearchContext";
import Home from './Pages/Home.component'
import ReactDOM from "react-dom";
import Search from "./Pages/Search";

function App() {
  const [data, setData] = useState();

  const[searchField,setSearchField] = useState(null)
  const url = "https://live.staticflickr.com/";

  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=recentImages&per_page=54&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log(response.data.photos.photo);
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <SearchContext.Provider value={{ searchField, setSearchField }}>
          <SearchBox search = {searchField} />
          <Routes>
            <Route path="/" element={<Home search={searchField} />}></Route>
            <Route exact path = '/search' element = {<Search searchVal = {searchField}/>} ></Route>
          </Routes>
        </SearchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
