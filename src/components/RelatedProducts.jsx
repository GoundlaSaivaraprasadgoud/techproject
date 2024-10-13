import React from 'react';
import { useParams, Link } from 'react-router-dom'; 
import productsData from './productsData';
import './styles.css';


const RelatedProducts = () =>{
    const { id } = useParams(); 
    const product = productsData.find(p => p.id === parseInt(id));

    const relatedProducts = productsData.filter(
        (p) => p.category === product.category && p.id !== product.id
    );


    return (
        <>
        
            <div className="related-products">
                <h2>Related Products</h2>
                <div className="products">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="product-card">
                                <Link to={`/product/${relatedProduct.id}`}>
                                    <img src={relatedProduct.images[0]} alt={relatedProduct.title} />
                                </Link>
                                    <h3>{relatedProduct.title}</h3>
                                    <p>Price: ₹{relatedProduct.finalPrice}</p>
                                    <div>
                                        <button  >Add to Cart</button>
                                    </div>
                            </div>
                        ))
                    ) : (
                        <p>No related products available.</p>
                    )}
                </div>
            </div>
         </>

    );



};
export default RelatedProducts;