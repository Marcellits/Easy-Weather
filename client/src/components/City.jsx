import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const City = (props) => {
    const [cityData, setCityData] = useState(null)
    const {city} = props.match.params

    useEffect(() => {
        fetch(`/city/${city}`)
        .then(response => response.json())
        .then(data => setCityData(data.current))
    }, [])

    console.log(cityData)
    return (
        <div>
            <h1>THis is the city page</h1>
            <h1>Current temparature for {city} is {cityData && cityData.temp_f}</h1>
        </div>

    )
}

export default City