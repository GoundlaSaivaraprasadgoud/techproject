import React from "react";
import {Route ,Routes} from 'react-router-dom';
import ProductList from "../components/ProductList";
import AllProducts from "../components/AllProducts";
import HeroProductSlider from "../components/HeroProductSlider";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";
import Cart from "../components/Cart";



const Routing = ()=>{
    return(
    <Routes>
        
        <Route path="/" element={<>
                <HeroProductSlider/>
                <ProductList />
            </>} />

            <Route path="/product/:id" element={<>
                <ProductDetails/>
                <RelatedProducts/>
            </>}/>


        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/Cart" element={<Cart/>}/>

    </Routes>
    );
};
export default Routing;