import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData'; 
import './styles.css'; 


const HeroProductSlider = () => {
    const heroProducts = productsData.filter(product => product.tag === 'hero-product');

    const [currentIndex, setCurrentIndex] = useState(0);

  
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroProducts.length);
    };


    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Auto-play every 3 seconds
        return () => clearInterval(interval);
    }, );

    return (
        <div className="slider">
            <div className="slider-content">
                <div className="slider-info">
                    
                        <p className='title'>{heroProducts[currentIndex].title}</p>
                        <h1 className='tagline'>{heroProducts[currentIndex].tagline}</h1>
                    <div className='price'>
                        <p>Price: ₹{heroProducts[currentIndex].finalPrice}</p>
                        <strike><p>₹{heroProducts[currentIndex].originalPrice}</p></strike>
                    </div>
                    <Link to={`/product/${heroProducts[currentIndex].id}`} className="shop-now btn btn-danger">
                        Shop Now
                    </Link>
                </div>
                <div className="slider-image">
                    <img src={heroProducts[currentIndex].heroImage} alt={heroProducts[currentIndex].title} />
                </div>
            </div>
           
            <div className="navigation-dots">
                {heroProducts.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};
export default HeroProductSlider;