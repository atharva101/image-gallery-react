import PhotoContainer from "../Components/PhotoContainer/PhotoContainer.component";
import { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "../config";
export default function Home (props) {

    const [data, setData] = useState();

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


    return(
        <div className="home">
           { data && <PhotoContainer props = {data}/>}
        
        </div>
    )
}