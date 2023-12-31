import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const {products, initialCart} = useLoaderData(); 
    const[cart, setCart]  = useState(initialCart);
    
    const handleRemoveItem =(id)=>{
       const remainingProduct = cart.filter(product=> product.id !== id);
       setCart(remainingProduct);
       removeFromDb(id);
    }
    return (
        <div className='Shop-container'>
           <div className='orders-container'>
           {
            cart.map(product => <ReviewItem
            key={product.id} 
            product={product}
            handleRemoveItem ={handleRemoveItem}
                ></ReviewItem> )
           }

           </div>

           <div className='cart-container'>
            <Cart cart={cart}></Cart>

           </div>

        </div>
    );
};

export default Order;