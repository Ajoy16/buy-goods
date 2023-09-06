import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h2>Order Summary in Cart</h2>
            <p>Secleted Item:{cart.length}</p>
        </div>
    );
};

export default Cart;