import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Button from 'react-bootstrap/Button';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        {/* <h3>Hello How are you</h3> */}
        <SearchForm />
        <Button variant="outline-info">Info</Button>{' '}
      </div>
    </AppContextProvider>
  );
};

export default App;
