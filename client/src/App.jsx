import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import City from './components/City';

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
    <Router>
      <Switch>
        <AppContextProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/weather/:city" component={City} />
        </AppContextProvider>
      </Switch>
    </Router>
  );
};

export default App;
