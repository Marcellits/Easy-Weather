import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Entered SearchForm');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Hello!"
        />
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
