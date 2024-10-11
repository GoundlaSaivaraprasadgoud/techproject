import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/header';
import ProductList from './components/ProductList';
import HeroProductSlider from './components/HeroProductSlider';


function App() {
  return (
   <>

     <Header/>
     <HeroProductSlider/>
     <ProductList/>
    
   </>
 
  );
}

export default App;