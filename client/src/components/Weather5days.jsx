import React from 'react';
import {Container, Col, Row, Card } from 'react-bootstrap';
import moment from 'moment';
import '../assets/styles/Weather5Days.css'

const Weather5Days = (props) => {
    const dayMap={
        0:'Sunday',
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',  
    }
    return (
        <Container>
                {props.forecast.forecastday.map((item, key) => {
                    const dayNumber = moment(item.date).day()
                    return (
                    <Col key={key}>
                        <Card id="card" >
                            <Card.Img variant="top" src={item.day.condition.icon} style={{padding:'15px'}}/>
                            <Card.Body>
                                <Card.Title 
                                    style={{textAlign:'center', 
                                    fontSize:'17px'
                                    }}> 
                                    {(dayMap[dayNumber])}
                                </Card.Title>
                                <Card.Text>
                                    <Row>min: {(item.day.mintemp_f).toFixed(0)} °F</Row>   
                                    <Row>max: {(item.day.maxtemp_f).toFixed(0)} °F</Row>      
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })}               
        </Container>
    )
}

export default Weather5Days;