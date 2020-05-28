import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const clickOutsideCart=()=>({
    type: CartActionTypes.CLICK_OUTSIDE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
});

export const removeItemFromCart = item =>({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})
 export const deleteItemsAfterLoggedOut =()=>({
     type : CartActionTypes.DELETE_ITEMS_AFTER_LOGGEDOUT,
 })