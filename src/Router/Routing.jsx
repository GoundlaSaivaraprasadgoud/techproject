import React from "react";
import {Route ,Routes} from 'react-router-dom';
import ProductList from "../components/ProductList";
import AllProducts from "../components/AllProducts";
import HeroProductSlider from "../components/HeroProductSlider";
import ProductDetails from "../components/ProductDetails";



const Routing = ()=>{
    return(
    <Routes>
        
        <Route path="/" element={<>
                <HeroProductSlider/>
                <ProductList />
            </>} />

            <Route path="/product/:id" element={<>
                <ProductDetails/>
            
            </>}/>


        <Route path="/allproducts" element={<AllProducts/>}/>

    </Routes>
    );
};
export default Routing;