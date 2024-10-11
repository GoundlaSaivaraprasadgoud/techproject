import React, { useState } from 'react';
import productsData from './productsData';
import './styles.css';

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); // Initial category is 'All'

    // Function to filter products based on selected category
    const filteredProducts = selectedCategory === 'All'
        ? productsData
        : productsData.filter(product => product.category === selectedCategory);

    return (
        <div>
            <center>
                
                <h1>Top Products</h1>
                <div className='categories mt-5 mb-5'>
                    <button className={`All ${selectedCategory === 'All' ? 'active' : ''}`} onClick={() => setSelectedCategory('All')}>
                        All
                    </button>
                    <button className={`Headphones ${selectedCategory === 'Headphones' ? 'active' : ''}`} onClick={() => setSelectedCategory('Headphones')}>
                        Headphones
                    </button>
                    <button className={`Earbuds ${selectedCategory === 'Earbuds' ? 'active' : ''}`} onClick={() => setSelectedCategory('Earbuds')}>
                        Earbuds
                    </button>
                    <button className={`Earphones ${selectedCategory === 'Earphones' ? 'active' : ''}`} onClick={() => setSelectedCategory('Earphones')}>
                        Earphones
                    </button>
                    <button className={`Neckbands ${selectedCategory === 'Neckbands' ? 'active' : ''}`} onClick={() => setSelectedCategory('Neckbands')}>
                        Neckbands
                    </button>
                </div>
            </center>

            <div className="products">
                {filteredProducts.slice(0, 11).map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.images[0]} alt={product.title} />
                        <p>{product.rateCount} </p>
                        <h2>{product.title}</h2>
                        <p>{product.info}</p>
                        <hr />
                        <p>₹{product.finalPrice}</p>
                        <strike><p>₹{product.originalPrice}</p></strike>
                        
                        <a href={product.path}>View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
