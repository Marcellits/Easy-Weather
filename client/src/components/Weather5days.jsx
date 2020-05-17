import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


const WeatherDays = (props) => {
    
   // const [daysData, setDaysData] = useState(null)
    
    //I have to call the information from the server but I don't know how to call it. Should I call the API again?
    // I also need to change the cols with the information of each day (5 days)
    // useEffect(() => {
    //     fetch( )
    //     .then(response => response.json())
    //     .then(data => setDaysData(data.forecast.))
    // }, [])
    


   
    return (
        <Container>
            <Row>
                {props.forecast.forecastday.map((item) => {
                    return (
                    <Col> min: {item.day.mintemp_f} °F |  max: {item.day.maxtemp_f} °F</Col>
                    )
                })}               
            </Row>
        </Container>
    )
}

export default WeatherDays;