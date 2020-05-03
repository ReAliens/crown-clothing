import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';

import CollectionOverview from '../../components/collection-overview/collection-overview.component'


const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionID`} component={CollectionPage}/>
    </div>
);

export default ShopPage;