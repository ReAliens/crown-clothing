import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-items/cart-item.component';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector'


import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);