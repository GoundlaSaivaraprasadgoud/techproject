import React, { useState } from 'react';
import productsData from './productsData'; 
import './styles.css'; 
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actionCreator/ProductAction';
import { sortMenu, brandsMenu, categoryMenu } from './filterBardata'; 

const AllProducts = () => {
    const dispatch = useDispatch();

  
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prevState =>
            prevState.includes(brand)
                ? prevState.filter(b => b !== brand)
                : [...prevState, brand]
        );
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(c => c !== category)
                : [...prevState, category]
        );
    };

    const filteredAndSortedProducts = () => {
        let filteredProducts = productsData;


        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }


        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

      
        switch (selectedSort) {
            case 'Latest':
             
                filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            case 'Featured':
             
                filteredProducts.sort((a, b) => b.featured - a.featured);
                break;
            case 'Top Rated':
                filteredProducts.sort((a, b) => b.ratings - a.ratings);
                break;
            
            default:
                break;
        }

        return filteredProducts;
    };


    return (
        <div className="all-products-container">
          
            <div className="filter-sidebar mt-5">
            <div className="sort-options">
            <h3>Sort By</h3>
            <div className="sort-radio-buttons">
                {sortMenu.map((sortOption) => (
                    <div key={sortOption.id} className="sort-option">
                        <input
                            type="radio"
                            id={`sort-${sortOption.id}`}
                            name="sort"
                            value={sortOption.title}
                            checked={selectedSort === sortOption.title}
                            onChange={handleSortChange}
                        />
                        <label htmlFor={`sort-${sortOption.id}`}>
                            {sortOption.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>

                <h4>Filter by </h4>
                <hr />
                <p>Brand</p>
                {brandsMenu.map((brand) => (
                    <div key={brand.id}>
                        <input
                            type="checkbox"
                            id={`brand-${brand.label}`}
                            checked={selectedBrands.includes(brand.label)}
                            onChange={() => handleBrandChange(brand.label)}
                        />
                        <label htmlFor={`brand-${brand.label}`}>{brand.label}</label>
                    </div>
                ))}
                <hr />
                <p> Category</p>
                {categoryMenu.map((category) => (
                    <div key={category.id}>
                        <input
                            type="checkbox"
                            id={`category-${category.label}`}
                            checked={selectedCategories.includes(category.label)}
                            onChange={() => handleCategoryChange(category.label)}
                        />
                        <label htmlFor={`category-${category.label}`}>{category.label}</label>
                    </div>
                ))}

                
       
            </div>

            {/* Display filtered and sorted products */}
            <div className="allproducts mt-5">
                {filteredAndSortedProducts().map(product => (
                    <div className="allproducts-card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.images[0]} alt={product.title} />
                        </Link>
                        <p>{product.rateCount}</p>
                        <h2 className='title'>{product.title}</h2>
                        <p className='pinfo'>{product.info}</p>
                        <hr />
                        <p>₹{product.finalPrice}</p>
                        <strike><p>₹{product.originalPrice}</p></strike>
                        <button className="btn btn-danger" onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
