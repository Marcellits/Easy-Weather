import React, { useEffect, UseState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=&q=5984703154d0418d83b12635201505${search}`
      .then((response) => {
        console.log('line 15', response);
        setApiData(response.data.meals[0]);
      })
      .catch((error) => {
        console.error(error);
      });
      );
    console.log('inside fetchData', result.data);
    setApiData(result.data.weather);
  };
  fetchData();
}, [search]);

