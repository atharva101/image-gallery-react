import axios from "axios";
import { useState,useEffect } from "react";
import apiKey from "../config";
import PhotoContainer from '../Components/PhotoContainer/photoContainer.component'
import SkeletonCard from "../Components/Skeleton/skeleton.component";
import './searchPage.styles.css'
export default function Search(props){


  //console.log(props.searchVal)
 
  const [ data, setData] = useState([])
  const [isLoading, setisLoading] = useState(false)


  useEffect(() => {
    setisLoading(true)
    const timing =  setTimeout(() => {
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.searchVal}&per_page=54&format=json&nojsoncallback=1`
        )
        .then((response) => {
          
         // console.log(response.data.photos.photo);
          setData(response.data.photos.photo)
          setisLoading(false)
        })
        .catch((error) => {
          console.log("Error fetching and parsing data", error);
        });
    },1000);

    return() => clearTimeout(timing)
    
    },[props.searchVal])
   

    return (
      <div>
        <h1>Search results for : {props.searchVal}</h1>
        {isLoading && (
          <SkeletonCard/>
        )}
        {!isLoading && <PhotoContainer props={data} />}
      </div>
    );
}