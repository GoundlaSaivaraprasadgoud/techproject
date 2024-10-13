import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import productsData from './productsData';
import './styles.css';



const ProductDetails = () => {
    const { id } = useParams(); 
    const product = productsData.find(item => item.id === parseInt(id));
    const [imageSelected, setimageSelected] = useState(product.images[0]);



   
    const handleImageClick = (image) => {
        setimageSelected(image);
    };

    

    return (
       
        <div className="product-details">
            <div className="product-allimages">
                <div className="smallimages">
                    {product.images.map((image) => (
                        <img
                            src={image}
                            onClick={() => handleImageClick(image)}
                            className={imageSelected === image ? 'active' : ''}
                        />
                    ))}
                </div>
                <div className="main-image">
                    <img src={imageSelected} alt="Selected" />
                </div>
            </div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.info}</p>
                <p>{product.rateCount} | {product.ratings} Ratings</p>
                <hr />
                <div>
                    <p>Price: ₹{product.finalPrice}</p>
                    <strike>Original Price: ₹{product.originalPrice}</strike>
                </div>
                <hr />
                <div>
                    <button  >Add to Cart</button>
                </div>
            </div>
            

            
        </div>


    );
};

export default ProductDetails;