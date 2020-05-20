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
        <input
          type="text"
          placeholder="Search for a city"
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>   
      </form>)

}

export default Resultspagesearch