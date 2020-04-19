import React from 'react';

import './cart-items.style.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt="item" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity}*${price}</span>
        </div>
    </div>
);
export default CartItem;