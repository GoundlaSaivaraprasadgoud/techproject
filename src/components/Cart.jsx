import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                    <div className="d-flex border border-secondary" style={{maxWidth:'fit-content'}}> 
                      <button className='btn inc text-white'><FontAwesomeIcon icon={faPlus}/></button>
                      <p className='text-danger h4'>{product.quantity}</p>
                      <button className='btn dec text-white'><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
              </div>
            </div>
          ))}
         </div>

      </div>
    ):(<div className='row p-5 my-5'>
      <div className="empty-cart-icons text-center d-flex justify-content-center px-5 mt-5" style={{position:'relative'}}>
      <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"13vw",color:'red'}}/>
      <FontAwesomeIcon icon={faXmark} style={{fontSize:"8vw",position:'absolute'}}/>
      </div>
      
      <div className='d-flex flex-column justify-content-center align-items-center'> 
      <h2 className='text-center p-4'>Your Cart is Empty</h2>
      <Link to="/allproducts">
      <button className='btn px-5' style={{maxWidth:'fit-content',color:'white',backgroundColor:'red'}}>Start Shopping</button>
      </Link>
      </div>
      </div>)}
</div>
)
}

export default Cart
