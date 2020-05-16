//import SHOP_DATA from './shop.data';
import ShopActionType from './shop.type';


const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionType.UPDATE_COLLECTION:
            return {
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}
export default shopReducer;