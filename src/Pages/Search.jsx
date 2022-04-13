import axios from "axios";
import { useState,useEffect } from "react";
import apiKey from "../config";

import PhotoContainer from '../Components/PhotoContainer/PhotoContainer.component'

export default function Search(props){


  console.log(props.searchVal)
 
  const [ data, setData] = useState([])
  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.searchVal}&per_page=54&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log(response.data.photos.photo);
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  },[props.searchVal]);

    return (
      <div>
        <h1>Search results for : {props.searchVal}</h1>
        {data && <PhotoContainer props = {data}/>}
      </div>
    );
}