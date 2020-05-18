import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const GenMessage = (props) => {
  const [arrayMessage, setArrayMessage] = useState([
    'Today is going to be cold, take a coat.',
    'Get your sunglasses and the sunscreen! Today is a good day to go to the beach.',
    'When leaving the house, it may be a good idea to take the umbrella.'
  ]);
  const [message, setMessage] = useState('Test');

  //I have to connect the condition data to the array
  //and print this value

  useEffect(() => {
    console.log('am i working?');
    if (props.info.condition.text === 'Sunny') {
      setMessage(arrayMessage[1]);
    } else if (props.info.condition.text === 'Partly cloudy') {
      setMessage(arrayMessage[2]);
    } else if (props.info.condition.text === 'snowing') {
      setMessage(arrayMessage[0]);
    }
  }, []);

  return (
    <Container>
      <h1>{props.info.condition.text}</h1>
      <h2>{message} </h2>
    </Container>
  );
};
export default GenMessage;
