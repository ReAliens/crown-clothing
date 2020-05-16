import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { updateCollection } from '../../redux/shop/shop.action';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { firestore, convertCollectionsSnapshottoMap } from '../../firebase/firebase.utils';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collections');
        /*fetch('https://firestore.googleapis.com/v1/projects/crw-cloth/databases/(default)/documents/collections')
        .then(response=>response.json())
        .then(collections=>console.log(collections));*/
        //this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshottoMap(snapshot);
            updateCollection(collectionsMap);
            this.setState({ loading: false });
        }) 
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );

    }

}
const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);