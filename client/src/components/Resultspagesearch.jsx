import React, { useState} from 'react';
import { Button } from 'react-bootstrap';




const Resultspagesearch = (props) => {
    const [searchTerm, setSearchTerm] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        console.log('hi!');
        e.preventDefault();
        props.history.push(`/weather/${searchTerm}`);
      };
    return ( 
    <form onSubmit={handleSearch}>
        <input style={{width: '40vw', borderRadius: '15px'}}
          type="text"
          placeholder=" Search for a City, Address, or Zip Code"
          onChange={handleChange}
        />
        <Button class="button" type="submit" style={{marginLeft: '2vw', borderRadius: '15px'}}>Search</Button>   
      </form>)

}

export default Resultspagesearch