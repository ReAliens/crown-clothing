import React from 'react';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-items/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCurrentUser } from '../../redux/user/user.selector';



import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch, currentUser }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {/* {
                (cartItems.length && currentUser) ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))

                    : <span className='empty-message'>Your cart is empty</span>
            } */}
            {
                cartItems.length ? cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) 
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <div className='checkout-button' onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }} >Go To Checkout</div>
    </div >
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser,

})

export default withRouter(connect(mapStateToProps)(CartDropdown));