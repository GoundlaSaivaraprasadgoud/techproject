import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faMinus,faPlus, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/actionCreator/ProductAction';

const Cart = () => {
    const cart_data=useSelector((state)=>state.productData.cartData);
    const dispatch=useDispatch();
   
     console.log(cart_data);

  return (
    <div className='container-fluid bg-black text-white p-5'>
    {cart_data.length>0?(
      <div className='row p-5'>
         <div className='col-md-7 overflow-auto' style={{maxHeight:"100vh",backgroundColor:"#121212"}}>
        {cart_data.map((product)=>(
            <div className="row mt-5">
              <div className="col-md-4">
                <h1>{product.title}</h1>
              

                <img src={product.images[0]}   className='img-thumbnail' style={{backgroundColor:"#121212",border:"none"}} alt={product.title} />

              </div>
              <div className="col-md-8">
                    <div className="d-flex">
                             <p style={{fontSize:"large"}}>{product.title} {product.info}</p> 
                             <span  className='mx-5' onClick={()=>dispatch(removeFromCart(product.id))}><FontAwesomeIcon icon={faTrashCan} /></span>
                    </div>
                    <h5>₹{product.finalPrice}<strike> ₹{product.originalPrice}</strike></h5>
              </div>
            </div>
          ))}
         </div>
        
      </div>
    ):(<div>EmptyCart</div>)}
</div>
  )
}

export default Cart
