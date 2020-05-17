import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


const Home = (props) => {
    const [searchTerm, setSearchTerm] = useState(null)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearch = (e) => {
        console.log("hi!")
        e.preventDefault()
        props.history.push(`/weather/${searchTerm}`)
    }
    return (
        <div>
            <h1>This is the Home page</h1>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for a city" onChange={handleChange}/>
                <Button type="submit">Search</Button>
            </form>
        </div>
    )
}

export default Home