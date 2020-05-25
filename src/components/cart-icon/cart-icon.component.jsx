import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { clickOutsideCart } from '../../redux/cart/cart.action';
//import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden, itemCount, clickOutsideCart }) => (

    <div className='cart-icon' onClick={toggleCartHidden} onBlur={() => { clickOutsideCart() }}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToprops = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    clickOutsideCart: () => dispatch(clickOutsideCart())
})
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToprops)(CartIcon); 