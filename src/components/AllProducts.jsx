import React from 'react';
import productsData from './productsData'; 
import './styles.css'; 
import { Link } from 'react-router-dom';

const AllProducts = () => {

  

  return (
    <div className="allproducts mt-5">
      {productsData.map(product => (
        <div className="allproducts-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
           <img src={product.images[0]} alt={product.title} />
          </Link>
          
          <p>{product.rateCount} </p>
          <h2>{product.title}</h2>
          <p>{product.info}</p>
          <hr />
          <p>₹{product.finalPrice}</p>
          <strike><p>₹{product.originalPrice}</p></strike>
          
          <button className="Add to Cart">Add to Cart</button>
        </div>
      ))}
    </div>
  )

};

export default AllProducts;
