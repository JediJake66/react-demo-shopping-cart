import { Button, Form } from 'react-bootstrap';

import Rating from './Rating';
import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          label="Fast Delivery Only"
          type="checkbox"
        />
      </span>
      <span>
        <Rating
          rating={''}
        />
      </span>
      <Button
        variant="light"
        onClick={() => console.log('clear filter')}
      >Clear Filters</Button>
    </div>
  )
}

export default Filters;
