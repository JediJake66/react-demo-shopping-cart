import { Button, Card } from 'react-bootstrap';

import Rating from './Rating';
import React from 'react';

const SingleProduct = ({ product }) => {

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>${product.price}</span>
            {product.fastDelivery ?
              <div>1 day delivery</div> :
              <div>3+ day delivery</div>
            }
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          <Button
            onClick={() => console.log("REMOVE")}
            variant="danger"
          >
            Remove
          </Button>
          <Button
            onClick={() => console.log("ADD")}
            style={{ marginLeft: '10px' }}
          >
            Add
          </Button>
        </Card.Body>
      </Card>
    </div >
  )
}

export default SingleProduct;
