import ShopActionType from './shop.type';
import { firestore, convertCollectionsSnapshottoMap } from '../../firebase/firebase.utils'


export const fetchCollectionStart = () => ({
    type: ShopActionType.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionType.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionType.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshottoMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
};
