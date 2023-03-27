import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice =0
    let totalShipping = 0
    for(let product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
    let tax = totalPrice*7 /100 
    let grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;