import './SearchBox.styles.css'
import {HiSearch} from 'react-icons/hi';
import { useState, useContext } from 'react';
import { SearchContext } from '../../Contexts/SearchContext/SearchContext';
import {useNavigate} from 'react-router-dom'
const SearchBox = (props) => {
    const navigate = useNavigate();
    const[inputVal,setinputVal] = useState('')
    
    const { searchField, setSearchField } = useContext(SearchContext);

    function getInputValue(event){
        console.log(inputVal)
        setinputVal(event.target.value)
    }

    function getSearchVal(){
        setSearchField(inputVal)
        console.log(searchField);
        navigate({
          pathname : '/search',
          search: `=${inputVal}`
        })
    }

    function redirect(){
    
     
    }
  

    return (
      <div className="searchbox-container">
        <input
          id="searchbox"
          type="text"
          placeholder="Search photos"
          onChange={e => getInputValue(e)}
        />
        <button className='button-18' id="searchbox-button" type="submit" onClick = {getSearchVal} >
          <HiSearch id="icon" onClick={redirect} />
        </button>
      </div>
    );
}

export default SearchBox