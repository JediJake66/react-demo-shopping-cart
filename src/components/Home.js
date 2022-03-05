import React from 'react';
import SingleProduct from './SingleProduct';
import faker from 'faker';

const products = [...Array(12)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(2, 20),
  image: faker.random.image(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5])
}));

const Home = () => {
  return (
    <div className="home">
      <div className="productContainer">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home;
