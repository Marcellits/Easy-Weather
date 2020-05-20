import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Card } from 'react-bootstrap';
// import Moment from 'moment';

const Weather5Days = (props) => {
    
    
    return (
        <Container>
            <Row>
                {props.forecast.forecastday.map((item, key) => {
                    return (
                    <Col key={key}>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={item.day.condition.icon} style={{width:'3rem', display: 'center'}}/>
                            <Card.Body>
                                <Card.Title>{item.date}</Card.Title>
                                <Card.Text>min: {item.day.mintemp_f} °F   max: {item.day.maxtemp_f} °F</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    )
                })}               
            </Row>
        </Container>
    )
}

export default Weather5Days;