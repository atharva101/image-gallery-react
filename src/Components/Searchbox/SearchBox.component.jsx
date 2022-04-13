import './SearchBox.styles.css'
import {HiSearch} from 'react-icons/hi';
import { useState, useContext } from 'react';
import { SearchContext } from '../../Contexts/SearchContext/SearchContext';
import {useNavigate} from 'react-router-dom'
const SearchBox = (props) => {
    const navigate = useNavigate();
    const[inputVal,setinputVal] = useState('')
    
    const { searchField, setSearchField } = useContext(SearchContext); //use of useContext hook to use searchfield value in the component

    function getInputValue(event){
        console.log(inputVal)
        setinputVal(event.target.value)
         
    }
 
    // function to get input field value on button click
    function getSearchVal(){
      if(!inputVal){
        console.log('hello')
        window.location.href = "/"
      }
        setSearchField(inputVal)
        setinputVal('')
        console.log(searchField);
        navigate({
          pathname : '/search',
          search: `=${inputVal}`
        })
        document.getElementById('searchbox').value = '' // clearing out search input after clicking search button
    }

   

    return (
      <div className="searchbox-container">
        <input
          id="searchbox"
          type="text"
          placeholder="Search photos"
          value = {inputVal}
          onChange={e => getInputValue(e)}
        />
        <button className='button-18' id="searchbox-button" type="submit" onClick = {getSearchVal} >
          <HiSearch id="icon"  />
        </button>
      </div>
    );
}

export default SearchBox