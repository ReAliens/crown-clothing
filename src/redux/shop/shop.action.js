import ShopActionType  from './shop.type';

export const updateCollection = collectionsMap => ({
    type: ShopActionType.UPDATE_COLLECTION,
    payload: collectionsMap
})